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


public class ImageProcessor extends UnicastRemoteObject implements ImageZoomProcessorInterface {

	
	protected ImageProcessor() throws RemoteException {
		super();
		// TODO Auto-generated constructor stub
	}


	@Override
	public String processIt(byte[] imageBytes, int x, int y, int w, int h) throws RemoteException {
    	ByteArrayInputStream bais = new ByteArrayInputStream(imageBytes);
    	// detect format image 
    	ImageInputStream iis;
    	
		try {
			iis = ImageIO.createImageInputStream(bais);
		
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
			
			
			// save to db
			db.saveAsBlob(imageBytes, baos.toByteArray());
			
        } catch (IOException e) {

			e.printStackTrace();
		}
		
		// 

		return "Image was processed and saved to db";
	}


}
