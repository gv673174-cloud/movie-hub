<?php 
include "../dbconnect.php";

$val = $_GET['id']; // this name is url name

$sql = "SELECT * FROM moviedata WHERE id='$val'";  // this name is database name

$result = mysqli_query($con, $sql) or die('failed');
if(mysqli_num_rows($result) > 0){
   $row = mysqli_fetch_assoc($result);
   if($row){
   include "movie-page.html";  
   }
}
?>