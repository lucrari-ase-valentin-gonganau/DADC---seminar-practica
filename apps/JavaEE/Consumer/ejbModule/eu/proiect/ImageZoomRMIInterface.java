package eu.proiect;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface ImageZoomRMIInterface extends Remote {

	void processImage(byte[] image) throws RemoteException;
}
