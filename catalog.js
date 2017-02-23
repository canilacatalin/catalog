
 $(document).ready(function() {

            $('#wrapper').dialog({
                autoOpen: false,
                title: 'Informations:',
				height: 400,
				width: 1000,
			show:{
                effect: "fade",
                duration: 1000
				 },
            hide:{
                effect: "fade",
                duration: 500
				 }
            });
                $('#opener').click(function() {
                $('#wrapper').dialog('open');
                });
				

		$("#addButton").click(function(){
		addToListAndTable();
		clearDialogAndInputFields();
		});
		
	
    $('.deleteButton').click(function(){
		removeCheckedRows(contactList);
		regenerateTable(contactList);
       });
   

		
	$("#statusOptions").click(function(){
        $("#panel").slideToggle("slow");
    });
	$("#student").click(function(){
		filter("student");
	});
	$("#teacher").click(function(){
		filter("teacher");
	});
	$("#cancel").click(function(){
		regenerateTable(contactList);
		$("#panel").slideToggle();
	});
 });

	var contactList = [];
	var nr = 0;
	
	// TODO : add ID - random number
	function Person(ID, firstName, lastName, status, yearOfBirth, address, phoneNumber)
	{
		this.ID = ID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.status = status;
		this.yearOfBirth = yearOfBirth;
		this.address = address;
		this.phoneNumber = phoneNumber;
	}
	
	function addToListAndTable(){
		
		var ID = generateRandomUniqueID();
		var firstName = document.getElementById("firstName");
		var lastName = document.getElementById("lastName");
		var status = document.getElementById("status");
		var yearOfBirth = document.getElementById("yearOfBirth");
		var address = document.getElementById("address");
		var phoneNumber = document.getElementById("phoneNumber");
		if(firstName.value!="" && lastName.value!="" && status.value!="")
		{
			var contact = new Person(ID, firstName.value, lastName.value, status.value, yearOfBirth.value, address.value, phoneNumber.value);
			contactList.push(contact);	
		}
		regenerateTable(contactList);		
	}
	// TODO :  rename	
	function regenerateTable(list){
		var number = 1;
		var Table = document.getElementById("tableBody");
		Table.innerHTML = "";
		for( var i in list)
		{
			$("#tableBody").append('<tr><td id="smallBox"><input type="checkBox" id="'+ list[i].ID +'" class="checkBox"></td><td id="smallBox">' + number + '</td> <td>' + list[i].firstName + '</td> <td>' + list[i].lastName + '</td> <td>'
			+ list[i].status + '</td><td> <input id="edit" type="button" value="Edit" onClick="edit(this)"> <input type="button" value="Delete" onClick="deleteThisRow(this)" id="'+ list[i].ID +'"> </td></tr>');
		number++;
		}
		
	}
	
	// TODO  :rename
	function clearDialogAndInputFields(){
		$('#wrapper').dialog('close');
		var selectAll = document.querySelectorAll(".inputs");
		for(var i in selectAll){
			selectAll[i].value = '';
		}
	}


function removeCheckedRows(list){
	
	$(".checkBox:checked").each(function(){
		deleteById($(this).attr('id'));
	});
}

function deleteById(ID)
{
	for(var i in contactList)
	{
		if(ID == contactList[i].ID){
			contactList.splice(i,1);
		}
	}
}
	
		
function deleteThisRow(e){
		deleteById($(e).attr('id'));
		regenerateTable(contactList);
}


			
function filter(givenStatus){ 
	var listOfThatStatus = [];
	var schoolStatus = givenStatus;
	for(var i = 0; i < contactList.length; i++)
	{
		if(schoolStatus === contactList[i].status)
		{
			listOfThatStatus.push(contactList[i]);
		}
	
	}
	regenerateTable(listOfThatStatus);
}

function generateRandomUniqueID(){
	return Math.random().toString(36).substr(2, 9);
}	

function edit(e){
	$('#wrapper').dialog('open');
	 var index = $(e).closest("tr").index();
	document.getElementById("firstName").value = contactList[index].firstName;
	document.getElementById("lastName").value = contactList[index].lastName;
	document.getElementById("status").value = contactList[index].status;
	document.getElementById("yearOfBirth").value = contactList[index].yearOfBirth;
	document.getElementById("address").value = contactList[index].address;
	document.getElementById("phoneNumber").value = contactList[index].phoneNumber;
}
			