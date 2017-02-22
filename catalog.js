
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
	$("#statusOptions").click(function(){
        $("#panel").slideToggle("slow");
    });
	$("#student").click(function(){
		filter("student");
	});
	$("#teacher").click(function(){
		filter("teacher");
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
		
		//nr++;
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
		refreshTable(contactList);
		/*$("#myTable").append('<tr><td id="checkBox"><input type="checkBox"></td><td class="rowID" id="checkBox">' + nr + '</td> <td>' + firstName.value + '</td> <td>' + lastName.value + '</td> <td>' + status.value + 
		'</td> <td> <input id="edit" type="button" value="Edit" onClick="edit()"> <input id="deleteRow" type="button" value="Delete" onClick="deleteThisRow(this)"> </td></tr>');*/
		
	}
		
	function refreshTable(list){
		var number = 1;
		var Table = document.getElementById("tableBody");
		Table.innerHTML = "";
		for( var i in list)
		{
			$("#tableBody").append('<tr><td id="checkBox"><input type="checkBox"></td><td class="RowID" id="checkBox">' + number + '</td> <td>' + list[i].firstName + '</td> <td>' + list[i].lastName + '</td> <td>'
			+ list[i].status + '</td><td> <input id="edit" type="button" value="Edit" onClick="edit(this)"> <input id="deleteRow" type="button" value="Delete" onClick="deleteThisRow(this)"> </td></tr>');
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


function removeCheckedRows(tableID){
	var j = -1;
	var objTable = document.getElementById(tableID).tBodies[0];
	var rowCount = objTable.rows.length;
	
		for( var i = 0; i < rowCount; i++){;
		
			j++;
			var row = objTable.rows[i];
			var chkbox = row.cells[0].getElementsByTagName('input')[0];
			if(null!=chkbox && true == chkbox.checked) {
				//alert("i position " + i);
				//alert("j position " + j);
				//alert(contactList[j].firstName);
				contactList.splice(j, 1);
				j--;
				//alert("j position after dec " + j);
			}
			
		}
}		


			
function deleteThisRow(e){
	
	var objTable = document.getElementById("myTable").tBodies[0]; 
	rowCount = objTable.rows.length;
	var fName = e.parentNode.parentNode.cells[2].textContent;
	//alert(fName);
	for( var i = 0; i < rowCount; i++)
	{
		if(fName === contactList[i].firstName)
		{
			contactList.splice(i, 1);
		}
		refreshTable(contactList);
	}
	/*var thisRow = e.parentNode.parentNode.rowIndex;
	alert(thisRow);
	var positionInArray = thisRow - 1;
	alert(positionInArray);
	alert(contactList[positionInArray].firstName);
	delete contactList[positionInArray];
	refreshTable(contactList);*/
	
}

/*function edit()	{
	$('#wrapper').dialog('open');
}*/
			
function filter(e){ 
	var number = 1;
	var objTable = document.getElementById("myTable").tBodies[0]; 
	var Table = document.getElementById("tableBody");
	Table.innerHTML = "";
	var schoolStatus = e;
	for(var i = 0; i < contactList.length; i++)
	{
		if(schoolStatus === contactList[i].status)
		{
			$("#tableBody").append('<tr><td id="checkBox"><input type="checkBox"></td><td class="RowID" id="checkBox">' + number + '</td> <td>' + contactList[i].firstName + '</td> <td>' + contactList[i].lastName + '</td> <td>'
			+ contactList[i].status + '</td><td> <input id="edit" type="button" value="Edit" onClick="edit(this)"> <input id="deleteRow" type="button" value="Delete" onClick="deleteThisRow(this)"> </td></tr>');
		}
		number++;
	}
}
			
			
			
			
			