package eu.proiect;

import java.io.IOException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.sql.SQLException;
import javax.jms.BytesMessage;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.TextMessage;

class ImageListener implements MessageListener {
	static final String RMI_SERVER_PORT = "1099";
	static final String RMI_SERVER_IP = "localhost";
	
    @Override
    public void onMessage(Message message) {
        byte[] imageData = null;
        
        try {
            if (message instanceof BytesMessage) {
                BytesMessage byteMsg = (BytesMessage) message;
        
                long length = byteMsg.getBodyLength();
                if (length > Integer.MAX_VALUE) {
                    throw new JMSException("The message is big to be processed.");
                }
     
                imageData = new byte[(int) length];
                byteMsg.readBytes(imageData);
                
                int x = byteMsg.getIntProperty("x");
                int y = byteMsg.getIntProperty("y");
                int w = byteMsg.getIntProperty("w");
                int h = byteMsg.getIntProperty("h");
                
                System.out.println("I received a binary message with the size of " + length + " bytes");
                System.out.println("Cords zoom: (" + x + "," + y + ") -> (" + w + "," + h + ")");

                processImageViaRMI(imageData, x, y, w, h);
                
                
               
            } else if (message instanceof TextMessage) {
                TextMessage msg = (TextMessage) message;
                System.out.println("Received control message = " + msg.getText());
            } else {
                System.out.println("Type of message is unknown: " + message.getClass().getName());
            }
        } catch (JMSException jmse) {
            jmse.printStackTrace();
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }


    private void processImageViaRMI(byte[] imageBytes, int x, int y, int w, int h) throws IOException, SQLException {
    	System.out.println("Loading image of " + imageBytes.length + " bytes for processing via RMI");
        
        int port = Integer.parseInt(System.getenv().getOrDefault("RMI_SERVER_PORT", RMI_SERVER_PORT));
        String addressIp = System.getenv().getOrDefault("RMI_SERVER_IP", RMI_SERVER_IP);
        
        try {
        	Registry registry = LocateRegistry.getRegistry(addressIp, port);
        	
        	ImageZoomProcessorInterface remote = (ImageZoomProcessorInterface) registry.lookup("ImageProcessorService");
        	
        	String raspuns = remote.processIt(imageBytes, x, y, w, h);
        	System.out.println("The answer received from RMI SERVER: " + raspuns);
        	
        } catch (Exception e) {
        	e.printStackTrace();
        }
        
    }
    
    
}
