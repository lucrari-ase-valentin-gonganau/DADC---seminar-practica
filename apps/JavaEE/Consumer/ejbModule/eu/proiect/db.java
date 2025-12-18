package eu.proiect;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class db {
	private static final String URL = "jdbc:mysql://localhost:3306/blobstore?useSSL=false";
	private static final String USER = "stud";
	private static final String PASS = "stud123";
		

	
	public static void saveAsBlob(byte[] imageOriginal, byte[] imageZoomed) throws SQLException {
		
		Connection conn = db.getConnection();
		// create table if not exists! 
		createTableIfExists(conn);
		
		
		
		conn.close();
		
	}
	
	
	private static Connection getConnection() throws SQLException { 
		
		
	    String url = System.getenv().getOrDefault("DB_URL", URL);
	    String user = System.getenv().getOrDefault("DB_USER", USER);
	    String pass = System.getenv().getOrDefault("DB_PASS", PASS);
	    
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



//public static byte[] loadOriginal(long id) throws SQLException {
//
//    String sql = "SELECT image_original FROM images WHERE id = ?";
//
//    try (Connection conn = Db.getConnection();
//         PreparedStatement ps = conn.prepareStatement(sql)) {
//
//        ps.setLong(1, id);
//
//        ResultSet rs = ps.executeQuery();
//        if (rs.next()) {
//            return rs.getBytes("image_original");
//        }
//        return null;
//    }
//}