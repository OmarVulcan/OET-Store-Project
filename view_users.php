<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registered Users</title>
    <style>
        body { font-family: sans-serif; padding: 20px; background: #f0f0f0; }
        table { width: 100%; border-collapse: collapse; background: #fff; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background-color: #00c6ff; color: white; }
        tr:nth-child(even) { background-color: #f2f2f2; }
    </style>
</head>
<body>

<h2>Registered Users Data</h2>

<table>
    <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Password (Raw)</th>
        <th>Date</th>
    </tr>

    <?php
    $file = 'users.txt';
    if (file_exists($file)) {
        $lines = file($file);
        foreach ($lines as $line) {
            $parts = explode('|', $line);
            if(count($parts) >= 3) {
                echo "<tr>";
                echo "<td>" . htmlspecialchars(trim($parts[0])) . "</td>";
                echo "<td>" . htmlspecialchars(trim($parts[1])) . "</td>";
                echo "<td>" . htmlspecialchars(trim($parts[2])) . "</td>";
                echo "<td>" . htmlspecialchars(trim($parts[3] ?? '')) . "</td>";
                echo "</tr>";
            }
        }
    } else {
        echo "<tr><td colspan='4'>No users found.</td></tr>";
    }
    ?>
</table>

</body>
</html>
