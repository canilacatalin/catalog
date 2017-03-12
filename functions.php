<?php

include_once("dbconnect.php");
$myArray = isset($_REQUEST['arr']) ? json_decode($_REQUEST['arr']) : array();

if(!empty($_GET['firstname']))
{
$select = "DELETE from persons WHERE FirstName='".$_GET['firstname']."' AND LastName='".$_GET['lastname']."'";
$query = mysqli_query($db_connect, $select) or die($select);

}

$s = "SELECT * FROM persons";
$result = $db_connect->query($s);
$count = $result->num_rows;
	
	for($i=0;$i<$count;$i++) {
		$sql = "DELETE FROM persons WHERE PersonID='" . $myArray[$i] ."'";
		mysqli_query($db_connect,$sql);
	}
	
mysqli_close($db_connect);

echo "<script>
			
             window.history.go(-1);
     </script>";


?>