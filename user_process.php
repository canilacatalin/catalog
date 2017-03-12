<?php

include("dbconnect.php");

$aId = $_REQUEST['thisId'];
$eId = $_REQUEST['test'];
$fname=$_REQUEST['first_name'];
$lname=$_REQUEST['last_name'];
$school_status = $_REQUEST['Sstatus'];
$yob = $_REQUEST['year_of_birth'];
$the_address = $_REQUEST['the_address'];
$phone_number = $_REQUEST['phone_number'];

$s ="SELECT 1 FROM persons WHERE PersonID='".$eId."'";
$result = $db_connect->query($s);
$count = $result->num_rows;

if($count > 0)
{
	$upd = "UPDATE persons set FirstName='" . $fname . "', LastName='" . $lname . "',  Status='" . $school_status . "', DateOfBirth='" . $yob . "', 
			Address='" . $the_address . "', PhoneNumber = '" . $phone_number . "' WHERE PersonID='" . $eId . "'";
			mysqli_query($db_connect,$upd);
}
else
{
	
	$sql = "INSERT INTO persons (PersonID, FirstName, LastName, Status, DateOfBirth, Address, PhoneNumber)
	VALUES ('$aId', '$fname', '$lname', '$school_status', '$yob', '$the_address', '$phone_number')";

	if ($db_connect->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $db_connect->error;
}
}
								

mysqli_close($db_connect);

echo "<script>
            //alert('message sent succesfully'); 
            window.history.go(-1);
     </script>";

?>