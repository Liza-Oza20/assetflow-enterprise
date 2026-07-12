CREATE DATABASE assetflow;

USE assetflow;

-- Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users (username, password)
VALUES
('admin', 'admin123');

-- Assets Table
CREATE TABLE assets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    asset_id VARCHAR(20) UNIQUE NOT NULL,
    asset_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    assigned_to VARCHAR(100),
    status VARCHAR(50)
);

INSERT INTO assets (asset_id, asset_name, category, assigned_to, status)
VALUES
('A001', 'Dell Laptop', 'Laptop', 'IT Department', 'Assigned'),
('A002', 'HP Printer', 'Printer', 'Admin Department', 'Available'),
('A003', 'Projector', 'Projector', 'Conference Room', 'In Use');

-- Resources Table
CREATE TABLE resources (
    id INT AUTO_INCREMENT PRIMARY KEY,
    resource_id VARCHAR(20) UNIQUE NOT NULL,
    resource_name VARCHAR(100) NOT NULL,
    type VARCHAR(50),
    department VARCHAR(100),
    status VARCHAR(50)
);

INSERT INTO resources (resource_id, resource_name, type, department, status)
VALUES
('R001', 'John Smith', 'Employee', 'IT', 'Available'),
('R002', 'Conference Room A', 'Meeting Room', 'Administration', 'Booked'),
('R003', 'Company Van', 'Vehicle', 'Logistics', 'Available');