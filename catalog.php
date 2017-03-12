<?php include('dbconnect.php');
$sql = "SELECT * FROM persons";
$result = $db_connect->query($sql);
?>
<!DOCTYPE html>
<html>

<head>

<link rel="stylesheet" type="text/css" href="catalog.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="catalog.js"></script>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<link rel="stylesheet" href="https://jqueryui.com/resources/demos/style.css">

</head>

<body>

<h1 align="center"> Catalog </h1>

<div class="playground">
<table id="myTable">
	<thead>
        <td id="smallBox"> Check<br>box </td>
		<td id="smallBox"> Nr </td>
		<td> <button id="firstNameSort"> First Name </button> </td>
		<td> <button id="lastNameSort">Last Name </button> </td>
		<td> <button id="statusOptions">Status </button> </td>
		<div id="panel">
		<button class="studentOption" id="student"> Filter student </button> 
		<button class="teacherOption" id="teacher"> Filter teacher </button> 
		<button id="cancelFilter"> Cancel filter </button>
		</div>
		<td> Operations </td>      
    </thead>
			
            <tbody id="tableBody">
			<?php if($result->num_rows > 0){
				while($row = $result->fetch_assoc()){
				?>	
					<script type="text/javascript">
					var contact = new Person("<?php echo $row['PersonID'] ?>" , "<?php echo $row['FirstName'] ?>" , "<?php echo $row['LastName'] ?>" , "<?php echo $row['Status'] ?>" , "<?php echo $row['DateOfBirth'] ?>" , "<?php echo $row['Address'] ?>" , "<?php echo $row['PhoneNumber'] ?>");
			contactList.push(contact);
			regenerateTable(contactList);
					</script>
			<?php	}
			}
			?>
			
			
            </tbody>
			

</table>

<button id="opener" class="openDialog" >Add new person </button>
<div id="wrapper">

<form action='user_process.php' method="post" name="userPost">

<label for="firstName"> First Name: </label>
<input type="text" id="firstName" class="inputs" name="first_name" maxlength="20" onkeypress="return lettersOnly(event)">
<br><br><br><br>
<label for="lastName"> Last Name: </label>
<input type="text" id="lastName" class="inputs" name="last_name" onkeypress="return lettersOnly(event)" > 
<br><br><br><br>
<label for="yearOfBirth"> Year of birth: </label>
<input type="text" maxlength="4" name="year_of_birth" placeholder="YYYY" id="yearOfBirth" class="inputs" onkeypress="return isNumberKey(event)">
<br><br><br><br>
<label for="address"> Address: </label>
<input type="text" id="address" class="inputs" name="the_address">
<br><br><br><br>
<label for="phoneNumber"> Phone number: </label>
<input type="text" id="phoneNumber" name="phone_number" class="inputs" onkeypress="return isNumberKey(event)">
<br><br>
<label for="status"> What is your status in University: </label>
<select id="status" name="Sstatus">
<option label="student" > student </option>
<option label="teacher" > teacher </option>
</select>
<br>

<input type="submit" id="addButton" onClick="generateRandomID(this)" name="thisId">
<input type="submit" id="saveEdit" name="test">
<input type="button" id="cancelPanelButton" value="Cancel">

</form>
</div>
<button type="button" class="deleteButton">Delete </button>




</body>


</html>
