<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP 1</title>
<meta name="author" content="Danilo Lima">
<meta name="description" content="Minha primeira aula de PHP!">
<meta name="keywords" content="pho, html, css, aula, etec">
<meta property="og:image" content="../icon/banner.jpg">
<meta property="og:location" content="pt_BR">
<meta property="og:site_name" content="Dan">
<link rel="apple-touch-icon" sizes="180x180" href="../icon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="../icon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../icon/favicon-16x16.png">
<link rel="manifest" href="../site.webmanifest">
<link rel="mask-icon" href="../icon/safari-pinned-tab.svg" color="#5bbad5">
<meta name="apple-mobile-web-app-title" content="Dan">
<meta name="application-name" content="Dan">
<meta name="msapplication-TileColor" content="#2b5797">
<meta name="theme-color" content="#ffffff">
<link rel="stylesheet" href="../menu/menu.css">

    <style>
        p {
            background-color: #000;
            font-size: 2em;
            margin: 0;
            padding: 0;
            color: #fff;
            margin-top: .4em;
        }

        div.container {
            background-color: #0002;
        }
    </style>
</head>
<div class="container">
<div id="navbar2"></div>
	<div id="navbar">
		<div id="backhome">
			<a href="http://etec199-2022-danilolima.atwebpages.com" id="navlink">
				<h1 id="logotxt">Dan</h1>
				<img id="logonav" src="../icon/android-chrome-512x512.png" alt="Logo">
			</a>
			<div id="guias">
				<span>
                    <a href="#" anim="ripple">PHP I</a>
                    <a href="../0217/index.php" anim="ripple">PHP II</a>
                    					<a href="../0223/index.php" anim="ripple">PHP III</a>
					<a href="../0301/index.php" anim="ripple">PHP IV</a>
			</div>
		</div>
	</div>
    <?php
    $nome = "<p align='center'> Meu nome é Danilo e eu estou aprendendo PHP!!!</p>";
    echo $nome;

    $n1 = 1;
    $n2 = 3;
    echo "<p align='center'>", $n1 + $n2, "</p>";
    ?>
    </div>
    <script src="../menu/menu.js"></script>
</body>
</html>
