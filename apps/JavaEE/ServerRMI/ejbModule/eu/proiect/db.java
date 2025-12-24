package eu.proiect;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class db {
	private static final String DB_URL = "jdbc:mysql://localhost:3306/blobstore?useSSL=false&allowPublicKeyRetrieval=true";
	private static final String DB_USER = "stud";
	private static final String DB_PASS = "stud123";
		

	
	public static void saveAsBlob(byte[] imageOriginal, byte[] imageZoomed)  {
		Connection conn;
		try {
			conn = db.getConnection();

		// create table if not exists! 
		createTableIfExists(conn);
		
		
		// save image in table
		String sql = "INSERT INTO images (image_original, image_zoomed) VALUES ( ?, ?)";
		
		PreparedStatement ps = conn.prepareStatement(sql);
		
		ps.setBytes(1, imageOriginal);
		ps.setBytes(2, imageZoomed);
		
		ps.executeUpdate();
		System.out.println("RowInserted in mysql");

		conn.close();
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}
	
	
	private static Connection getConnection() throws SQLException { 
	    String url = System.getenv().getOrDefault("DB_URL", DB_URL);
	    String user = System.getenv().getOrDefault("DB_USER", DB_USER);
	    String pass = System.getenv().getOrDefault("DB_PASS", DB_PASS);
	    
		return DriverManager.getConnection(url, user, pass);
	}
	

	
	private static void createTableIfExists(Connection conn) {
		String sql = """
			CREATE TABLE IF NOT EXISTS images (
				id BIGINT AUTO_INCREMENT PRIMARY KEY,
				image_original LONGBLOB,
				image_zoomed LONGBLOB,
				created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
			);
		""";

		try {
			PreparedStatement ps = conn.prepareStatement(sql);
	
			ps.execute();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}
	
}
