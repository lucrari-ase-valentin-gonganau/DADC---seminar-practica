package eu.proiect;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface ImageZoomProcessorInterface extends Remote {
    String processIt(byte[] imageBytes, int x, int y, int w, int h, String uploadId) throws RemoteException;
}