<!DOCTYPE html>
<html>
<head>
	<title>Home Page</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<style>
  .first
  {
    margin-top: 80px;
  }
  
</style>
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light ">
  <button class="navbar-toggler" type='button' data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto mx-auto text-danger">
      <li class="nav-item active text-warning">
        <a class="nav-link" href="Home.php">Home <span class="sr-only">(current)</span></a>
      </li>
     
      <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          SERVICES
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> -->
      <li class="nav-item">
        <a class="nav-link " href="aboutus.php" tabindex="-1" aria-disabled="true">About_Us</a>
      </li>
       <li class="nav-item">
        <a class="nav-link " href="Contact_Us.php" tabindex="-1" aria-disabled="true">Contact_Us</a>
      </li>
    </ul>
    
  </div>
</nav>


<div class="container first">
	<div class="row">
		
	</div>
</div>
	
  <div id="res" class="fahmy" align="center" style="position: fixed;top: 170px;right: 0;width: 230px;height: 30px;border: 1px solid black;border-radius: 10px;background-color: black;color: white;cursor: pointer;">
    Counter:0,Total:0
  </div>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.js"></script>
<!-- <script type="text/javascript" src="jqueryjqueryLib.js"></script> -->
<script type="text/javascript" src="home.js"></script>
</body>
</html>