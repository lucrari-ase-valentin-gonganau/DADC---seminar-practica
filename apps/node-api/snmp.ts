import { Router } from "express";
import snmp from "net-snmp";
import { dbMongo } from "./db.ts";

const router = Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;
  const offset = req.query.offset
    ? parseInt(req.query.offset as string, 10)
    : 0;

  // order by timestamp desc
  // get from smtp
  const data = await dbMongo.connection
    .collection("snmp_data")
    .find()
    .skip(offset)
    .limit(limit)
    .sort({ timestamp: -1 })
    .toArray();

  res.json({ data });
});

// set timeout interval
let flag = true;
let count = 0;
setInterval(() => {
  if (!flag) {
    /// take a break;
    count++;

    if (count > 5) {
      throw new Error("SNMP operation taking too long, aborting.");
    }
    return;
  }

  count = 0;
  flag = false;

  const ipAddress = process.env.SNMP_TARGET_IP || "localhost";
  const community = process.env.SNMP_COMMUNITY || "public";

  const session = snmp.createSession(ipAddress, community);
  const oids = ["1.3.6.1.2.1.1.5.0", "1.3.6.1.2.1.1.6.0", "1.3.6.1.2.1.1.3.0"];

  session.get(oids, (error, varbinds) => {
    if (error) {
      console.error("SNMP Get Error:", error);
    } else {
      if (varbinds === undefined) {
        console.error("SNMP Get Error: varbinds is undefined");
        session.close();
        flag = true;
        return;
      }

      for (let i = 0; i < varbinds.length; i++) {
        if (snmp.isVarbindError(varbinds[i])) {
          console.error("SNMP Varbind Error:", snmp.varbindError(varbinds[i]));
        } else {
          // sysName,
          // sysLocation,
          // sysUpTime
          // save to mongodb
          dbMongo.connection.collection("snmp_data").insertOne({
            name: i === 0 ? "sysName" : i === 1 ? "sysLocation" : "sysUpTime",
            oid: varbinds[i].oid,
            value: varbinds?.[i]?.value?.toString() || "",
            timestamp: new Date(),
          });
          console.log(`${varbinds[i].oid} = ${varbinds[i].value}`);
        }
      }
    }
    session.close();
    flag = true;
  });
}, 10000);

export { router };
