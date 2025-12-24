package eu.proiect;


import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Iterator;

import javax.imageio.ImageIO;
import javax.imageio.ImageReader;
import javax.imageio.stream.ImageInputStream;
import javax.jms.BytesMessage;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.TextMessage;

class ImageListener implements MessageListener {

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
        
        
        byte[] zoomedImage = applyZoom(imageBytes, x,y,w,h);
        
        System.out.println("Applied the zoom on image");
        
        db.saveAsBlob(imageBytes, zoomedImage);
        
        System.out.println("Saved to database!");
        
//        ImageZoomRMI processor = lookupRMIObject();
//        processor.processImage(imageBytes);
    }
    
    
    
    private byte[] applyZoom(byte[] imageBytes, int x, int y, int w, int h) throws IOException {

    	ByteArrayInputStream bais = new ByteArrayInputStream(imageBytes);
    	
    	// detect format image 
    	ImageInputStream iis = ImageIO.createImageInputStream(bais);
    	Iterator<ImageReader> readers = ImageIO.getImageReaders(iis);
    	
    	if(!readers.hasNext()) {
    		throw new IOException("Unsupported image format");
    	}
    	
    	ImageReader reader = readers.next();
    	String formatName = reader.getFormatName();
    	
    	
    	reader.setInput(iis);
    	BufferedImage originalImage = reader.read(0);
    	
    	if(originalImage == null) {
    		throw new IOException("No image received");
    	}

        System.out.println("Original size: " +
                originalImage.getWidth() + "x" + originalImage.getHeight());
        System.out.println("Detected format: " + formatName);
        
        int startX = Math.max(0,  Math.min(x, originalImage.getWidth() - 1));
        int startY = Math.max(0,  Math.min(y,  originalImage.getHeight() - 1));
        int width = w;
        int height = h;
        
        System.out.println("Zoom region: x=" + startX + ", y=" + startY + ", w=" + width + ", h=" + height);

        BufferedImage zoomedImage = originalImage.getSubimage(startX, startY, width, height);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(zoomedImage, formatName, baos);

        return baos.toByteArray();
	}





//	private ImageZoomRMI lookupRMIObject() {
//		// TODO Auto-generated method stub
//		return null;
//	}
}