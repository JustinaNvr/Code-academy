<?php
require_once 'profile_data.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="app.css">
</head>
<body>
    <div class="profile">
    <div class="polaroid">
        <img src="<?php echo $profilePicture; ?>">
    </div>

        <?php if (!empty($_POST['name'])): ?>
            <h1><?php echo $name . '<br>' . $surname ?></h1>
            <h2><?php echo $city ?></h2>
            <h2><?php echo $prog_lan ?></h2>
            <h2><?php echo $additional ?></h2>

        <?php else: ?>
            <h3 style="color:red"> name not found</h3>
        <?php endif;?>
        <button type="submit" onclick="history.go(-1);">Back</button>
    </div>

</body>
</html>
