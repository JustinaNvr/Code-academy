<?php
require_once 'profile_data.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PROFILE</title>
    <link rel="stylesheet" href="app.css">
</head>
<body>
    <div class="profile">
        <h1>VARTOTOJO PROFILIS</h1>
    <div class="picture">
        <img src="<?php echo $profilePicture; ?>">
    </div>
        <h2><?php echo $name ?></h2>
        <h2><?php echo $surname ?></h2>
        <h3><?php echo $city ?></h3>
        <h3><?php echo $prog_lan ?></h3>
        <h3><?php echo $additional ?></h3>

        <button type="submit" onclick="history.go(-1);">Kurti profilį iš naujo</button>
    </div>

</body>
</html>
