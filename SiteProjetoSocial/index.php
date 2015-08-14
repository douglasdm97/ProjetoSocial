<!DOCTYPE html>
<html ng-app="SocialApp">
<head>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="bower_components/angular-material/angular-material.css">
    <link rel="stylesheet" href="css/main.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">
</head>
<body  >




    <div layout-fill ng-controller="MainController">
        <!-- Inicio PAgina -->

        <!-- {{{{TOOLBAR}}}} -->
        <?php include('templates/toolbar.php'); ?>
        <md-content>

        <?php include('templates/base.php'); ?>
    </md-content>






    <!-- Final Pagina -->
</div>



<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-aria/angular-aria.js"></script>
<script src="bower_components/angular-animate/angular-animate.js"></script>
<script src="bower_components/angular-material/angular-material.js"></script>
<script src="bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/parse-1.4.2.min.js"></script>




<!-- Doga 10 Scripts -->

<script src="js/mainController.js"></script>
<script src="js/perfilController.js"></script>
<script src="js/profileController.js"></script>

</body>
</html>