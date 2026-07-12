import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class Login {

    public boolean authenticate(String username, String password) {

        try 
        { 
            Connection con = Database.connect();

            String sql = "SELECT * FROM users WHERE username=? AND password=?";

            PreparedStatement pst = con.prepareStatement(sql);

            pst.setString(1, username);
            pst.setString(2, password);

            ResultSet rs = pst.executeQuery();

            if (rs.next()) {
                rs.close();
                pst.close();
                con.close();
                return true;
            }

            rs.close();
            pst.close();
            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }
}