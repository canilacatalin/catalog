
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
			
			
			addToListnTable();
			clear();
			
		});
		$(".deleteButton").click(function(){
		removeCheckedRows('myTable', contactList);
		refreshTable(contactList);
		
	});
	
 });

	var contactList = [];
	var nr = 0;
	
	function Person(firstName, lastName, status, yearOfBirth, address, phoneNumber)
	{
		this.firstName = firstName;
		this.lastName = lastName;
		this.status = status;
		this.yearOfBirth = yearOfBirth;
		this.address = address;
		this.phoneNumber = phoneNumber;
	}
	
	function addToListnTable(){
		
		nr++;
		var firstName = document.getElementById("firstName");
		var lastName = document.getElementById("lastName");
		var status = document.getElementById("status");
		var yearOfBirth = document.getElementById("yearOfBirth");
		var address = document.getElementById("address");
		var phoneNumber = document.getElementById("phoneNumber");
		if(firstName.value!="" && lastName.value!="" && status.value!="")
		{
			var contact = new Person(firstName.value, lastName.value, status.value, yearOfBirth.value, address.value, phoneNumber.value);
			contactList.push(contact);	
		}
		$("#myTable").append('<tr><td id="checkBox"><input type="checkBox"></td><td class="rowID" id="checkBox">' + nr + '</td> <td>' + firstName.value + '</td> <td>' + lastName.value + '</td> <td>' + status.value + 
		'</td> <td> <input id="edit" type="button" value="Edit" onClick="edit()"> <input id="deleteRow" type="button" value="Delete" onClick="deleteThisRow(this, contactList)"> </td></tr>');
		
	}
		
	function refreshTable(list){
		var number = 1;
		var Table = document.getElementById("tableBody");
		Table.innerHTML = "";
		for( var i in list)
		{
			$("#myTable").append('<tr><td id="checkBox"><input type="checkBox"></td><td class="RowID" id="checkBox">' + number + '</td> <td>' + list[i].firstName + '</td> <td>' + list[i].lastName + '</td> <td>'
			+ list[i].status + '</td><td> <input id="edit" type="button" value="Edit" onClick="edit()"> <input id="deleteRow" type="button" value="Delete" onClick="deleteThisRow(this, contactList)"> </td></tr>');
		number++;
		}
		
	}
	
		
	function clear(){
		$('#wrapper').dialog('close');
		var selectAll = document.querySelectorAll(".inputs");
		for(var i in selectAll){
			selectAll[i].value = '';
		}
	}


function removeCheckedRows(tableID, list){
	
	
	var objTable = document.getElementById(tableID).tBodies[0];
	var rowCount = objTable.rows.length;
	if(objTable.rows.length > 1)
	{
		for( var i = 1; i < rowCount; i++){;
			var row = objTable.rows[i];
			var chkbox = row.cells[0].getElementsByTagName('input')[0];
			if(null!=chkbox && true == chkbox.checked) {
				alert(i);
				alert(list[i].firstName);
				delete list[i];
			}
			
		}
	}
	
}		


			
function deleteThisRow(e, list){
	
	
	var thisRow = e.parentNode.parentNode.rowIndex;
	var positionInArray = thisRow - 1;
	alert(positionInArray);
	alert(list[positionInArray].firstName);
	delete list[positionInArray];
	//refreshTable(list);
	refreshTable(contactList);
	
}

function updateNr(){
	$(".rowID").each(function(i) {
			$(this).text(i+1);
		});
}
			
			
			
			
			
			
			
			
			