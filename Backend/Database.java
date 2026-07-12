import java.sql.Connection;
import java.sql.DriverManager;

public class Database {

    private static final String URL = "jdbc:mysql://localhost:3306/assetflow";
    private static final String USER = "root";
    private static final String PASSWORD = "";

    public static Connection connect() {
        Connection con = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            con = DriverManager.getConnection(URL, USER, PASSWORD);

            System.out.println("Database Connected Successfully!");

        } catch (Exception e) {
            System.out.println("Connection Failed!");
            e.printStackTrace();
        }

        return con;
    }
}