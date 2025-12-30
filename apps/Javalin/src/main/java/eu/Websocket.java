package eu;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import io.javalin.websocket.WsConfig;
import io.javalin.websocket.WsContext;

public class Websocket {
	private static Map<String, WsContext> websocketSession = new ConcurrentHashMap<>();
	
	
	public static void notifications(WsConfig ws) {
		ws.onConnect(ctx -> {
			String sessionId = ctx.sessionId().toString();
			websocketSession.put(sessionId, ctx);
			
			System.out.println("WebSocket connected:" + sessionId);
		});
		
		ws.onClose(ctx -> {
			String sessionId = ctx.sessionId().toString();
			websocketSession.remove(sessionId);
			System.out.println("WebScoket disconnected: " + sessionId);
		});
		
		ws.onError(ctx -> {
			System.err.println("WebSocket error: " + ctx.error());
		});
	}
	
	
	public static void alertUserThatImageIsReady(String uploadId, long rowId) {
		
		WsContext ws = websocketSession.get(uploadId);
		
		if(ws == null) {
			System.out.println("SessionId not exists in websocket");
			
			return;
		}
		
		
		String json = """
		{
				"rowId": %d,
				"status": "IMAGE_READY"
		}	
		""".formatted(rowId);

		try {
			ws.send(json);
		} catch ( Exception e) {
			e.printStackTrace();
			System.err.println("Failed to send to " + uploadId);
		}
		
	}
	
}
