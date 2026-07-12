import java.sql.Connection;
import java.sql.PreparedStatement;

public class Resource {

    public void addResource(String resourceId, String resourceName,
                            String type, String department, String status) {

        try {
            Connection con = Database.connect();

            String sql = "INSERT INTO resources (resource_id, resource_name, type, department, status) VALUES (?, ?, ?, ?, ?)";

            PreparedStatement pst = con.prepareStatement(sql);

            pst.setString(1, resourceId);
            pst.setString(2, resourceName);
            pst.setString(3, type);
            pst.setString(4, department);
            pst.setString(5, status);

            int rows = pst.executeUpdate();

            if (rows > 0) {
                System.out.println("Resource Added Successfully!");
            } else {
                System.out.println("Failed to Add Resource.");
            }

            pst.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}