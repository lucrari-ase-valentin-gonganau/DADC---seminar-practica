package eu.proiect;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;
import java.util.Iterator;

import javax.imageio.ImageIO;
import javax.imageio.ImageReader;
import javax.imageio.stream.ImageInputStream;


@SuppressWarnings("serial")
public class ImageProcessor extends UnicastRemoteObject implements ImageZoomProcessorInterface {

	
	protected ImageProcessor() throws RemoteException {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String processIt(byte[] imageBytes, int x, int y, int w, int h, String uploadId) {
    	
		
		System.out.println("Start image processing");
		System.out.println("Upload ID: " + uploadId);
		System.out.println("Received image bytes: " + imageBytes.length);
		System.out.println("Coordinates: x=" + x + ", y=" + y + ", w=" + w + ", h=" + h);
		
	
		
		try {
			if(imageBytes == null || imageBytes.length == 0) {
		        throw new IOException("Empty image received");
		    }
		
			String detectedFormat = detectImageFormat(imageBytes);
			
			if(detectedFormat == null) {
				throw new IOException("No format recognized");
			}

			ByteArrayInputStream bais = new ByteArrayInputStream(imageBytes);
			BufferedImage originalImage = ImageIO.read(bais);
	
	        System.out.println("Original size: " +
	                originalImage.getWidth() + "x" + originalImage.getHeight());
	        System.out.println("Detected format: " + detectedFormat);
	        
	        int startX = Math.max(0,  Math.min(x, originalImage.getWidth() - 1));
	        int startY = Math.max(0,  Math.min(y,  originalImage.getHeight() - 1));
	        int width = w;
	        int height = h;
	        
	        System.out.println("Zoom region: x=" + startX + ", y=" + startY + ", w=" + width + ", h=" + height);
	
	        BufferedImage zoomedImage = originalImage.getSubimage(startX, startY, width, height);
	        ByteArrayOutputStream baos = new ByteArrayOutputStream();
  
			ImageIO.write(zoomedImage, detectedFormat, baos);
			
			
			// save to database
			long idInserted = db.saveAsBlob(imageBytes, baos.toByteArray(), detectedFormat);
			
			return Long.toString(idInserted);
			
        } catch (IOException e) {

			e.printStackTrace();
		}
		
		return "error";
		
	}

	
	private String detectImageFormat(byte[] imageBytes) {
		if(imageBytes.length < 4) return null;
		
	    if(imageBytes[0] == 0x42 && imageBytes[1] == 0x4D) {
	        return "bmp";
	    }
	    
	    if(imageBytes[0] == (byte)0x89 && imageBytes[1] == 0x50 && 
	       imageBytes[2] == 0x4E && imageBytes[3] == 0x47) {
	        return "png";
	    }

	    if(imageBytes[0] == (byte)0xFF && imageBytes[1] == (byte)0xD8) {
	        return "jpg";
	    }
	
	    if(imageBytes[0] == 0x47 && imageBytes[1] == 0x49 && imageBytes[2] == 0x46) {
	        return "gif";
	    }
	    
	    return null;		
	}



}
