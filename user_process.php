<?php

include("dbconnect.php");

$fname=$_REQUEST['firstname'];
$lname=$_REQUEST['lastname'];
$school_status = $_REQUEST['Sstatus'];
$yob = $_REQUEST['year_of_birth'];
$the_address = $_REQUEST['the_address'];
$phone_number = $_REQUEST['phone_number'];


$sql = "INSERT INTO contact(firstname, lastname, status, yob, address, phonenumber) 
		VALUES ('$fname', '$lname', '$school_status', '$yob', '$the_address', '$phone_number')";
									

mysqli_close($db_connect);

header("location:catalog.php?note=success");

?>