import java.sql.Connection;
import java.sql.PreparedStatement;

public class Asset {

    public void addAsset(String assetId, String assetName, String category,
                         String assignedTo, String status) {

        try {
            Connection con = Database.connect();

            String sql = "INSERT INTO assets (asset_id, asset_name, category, assigned_to, status) VALUES (?, ?, ?, ?, ?)";

            PreparedStatement pst = con.prepareStatement(sql);

            pst.setString(1, assetId);
            pst.setString(2, assetName);
            pst.setString(3, category);
            pst.setString(4, assignedTo);
            pst.setString(5, status);

            int rows = pst.executeUpdate();

            if (rows > 0) {
                System.out.println("Asset Added Successfully!");
            } else {
                System.out.println("Failed to Add Asset.");
            }

            pst.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}