
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
			
			
			addToList();
			addToTable();
			clear();
			
		});
 });

	var contactList = [];
	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var status = document.getElementById("status");
	var yearOfBirth = document.getElementById("yearOfBirth");
	var address = document.getElementById("address");
	var phoneNumber = document.getElementById("phoneNumber");
	/*var firstname = $("#firstName").val();
	var lastname = $("#lastName").val();
	var status = $("#status").val();
	var address = $("#address").val();
	var phonenumber = $("#phoneNumber").val();*/
	
	
	function Details(firstName, lastName, status, yearOfBirth, address, phoneNumber)
	{
		this.firstName = firstName;
		this.lastName = lastName;
		this.status = status;
		this.yearOfBirth = yearOfBirth;
		this.address = address;
		this.phoneNumber = phoneNumber;
	}
	
	function addToList(){
		if(firstName.value!="" && lastName.value!="" && status.value!="")
		{
			var contact = new Details(firstName.value, lastName.value, status.value, yearOfBirth.value, address.value, phoneNumber.value);
			contactList.push(contact);	
		}
		
	}
		
	function addToTable(){
		for( var i in contactList)
		{
			$("#myTable").append('<tr><td id="checkBox"><input type="checkBox"></td><td class="rowID" id="checkBox"></td> <td>' + contactList[i].firstName + '</td> <td>' + contactList[i].lastName + '</td> <td>'
			+ contactList[i].status + '</td><td> <input id="edit" type="button" value="Edit" onClick="edit()"> <input id="deleteRow" type="button" value="Delete" onClick="deleteThisRow(this)"> </td></tr>');
		}
	}
		
	function clear(){
		$('#wrapper').dialog('close');
		var selectAll = document.querySelectorAll(".inputs");
		for(var i in selectAll){
			selectAll[i].value = '';
		}
	}
	/*$("#addButton").click(function(){
		var firstName = $("#firstName").val();
		var lastName = $("#lastName").val();
		var status = $("#status").val();
		if(firstName!="" && lastName!="" && status!="")
		{
		$("#myTable").append('<tr><td id="checkBox"><input type="checkBox"></td><td class="rowID" id="checkBox"></td> <td>' + firstName + '</td> <td>' + lastName + '</td> <td>' + status + 
		'</td> <td> <input id="edit" type="button" value="Edit" onClick="edit()"> <input id="deleteRow" type="button" value="Delete" onClick="deleteThisRow(this)"> </td></tr>');
		}

		$('#wrapper').dialog('close');
		$("#firstName").val("");
		$("#lastName").val("");
		$("#status").val("");
		$("#phoneNumber").val("");
		$("#yearOfBirth").val("");
		$("#address").val("");
		updateNr();
	});
	$(".deleteButton").click(function(){
		removeCheckedRows('myTable');
		updateNr();
	});
	
});

function removeCheckedRows(tableID){
	var objTable = document.getElementById(tableID).tBodies[0];
	var rowCount = objTable.rows.length;
	if(objTable.rows.length > 1)
	{
		for( var i = 1; i < rowCount; i++){
			var row = objTable.rows[i];
			var chkbox = row.cells[0].getElementsByTagName('input')[0];
			if(null!=chkbox && true == chkbox.checked) {
				objTable.deleteRow(i);
				rowCount--;
				i--;
			}
		}
	}
}		
			
function deleteThisRow(e){
	var thisRow = e.parentNode.parentNode.rowIndex;
	myTable.deleteRow(thisRow);
	updateNr();
}

function updateNr(){
	$(".rowID").each(function(i) {
			$(this).text(i+1);
		});
}*/
			
			
			
			
			
			
			
			
			