<?php
    include "dbconnect.php";
    $sql = 'select * from moviedata';
    $result= mysqli_query($con, $sql) or die('failed') ;
    if(mysqli_num_rows($result) > 0){    
    
                include "movie.html";                  
    }
     ?>
