public class Main {

    public static void main(String[] args) {

        System.out.println("======================================");
        System.out.println(" AssetFlow Enterprise Management");
        System.out.println("======================================");

        // Test Database Connection
        Database.connect();

        // Test Login
        Login login = new Login();

        boolean result = login.authenticate("admin", "admin123");

        if (result) {
            System.out.println("Login Successful!");
        } else {
            System.out.println("Invalid Username or Password!");
        }

        // Add Sample Asset
        Asset asset = new Asset();
        asset.addAsset(
                "A004",
                "Lenovo Laptop",
                "Laptop",
                "IT Department",
                "Available"
        );

        // Add Sample Resource
        Resource resource = new Resource();
        resource.addResource(
                "R004",
                "Meeting Room B",
                "Meeting Room",
                "Administration",
                "Available"
        );

        System.out.println("System Executed Successfully.");
    }
}