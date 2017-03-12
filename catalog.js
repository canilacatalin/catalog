
 $(document).ready(function() {	
    $('#wrapper').dialog({
        autoOpen: false,
        title: 'Informations:',
		height: 800,
		width: 1150,
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
			ChangeDisplayOfEditAndAddButtons("none", "initial");
			clearDialogAndInputFields();
			setValue("addButton", "Add to contacts");
            });
	$('#cancelPanelButton').click(function(){
		clearDialogAndInputFields();
	});	

	$("#addButton").click(function(){
		addToListAndTable();
		$('#wrapper').dialog('close');
		});
	
    $('.deleteButton').click(function(){
		removeCheckedRows();
		regenerateTable(contactList);
       });
    $("#saveEdit").click(function(){
	   
		saveEdit(storedIndex[0]);
		storedIndex.splice(0,1);
		regenerateTable(contactList);
		$('#wrapper').dialog('close');
		});

	$("#firstNameSort").click(function(){
		SortAlphabetically(contactList, "firstName");
		regenerateTable(contactList);
	});
	$("#lastNameSort").click(function(){
		SortAlphabetically(contactList, "lastName");
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
	$("#cancelFilter").click(function(){
		regenerateTable(contactList);
		$("#panel").slideToggle();
	});
	
	
 });
	var editArray = [];
	var checkedBoxes = [];
	var storedIndex = [];
	var contactList = [];
	var nr = 0;
	
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
		
		var idof = document.getElementById("addButton");
		var ID = idof.getAttribute('value');	
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
	
	function regenerateTable(list){
		var number = 1;
		var Table = document.getElementById("tableBody");
		Table.innerHTML = "";
		for( var i in list)
		{
			$("#tableBody").append('<tr><td id="smallBox"><input type="checkBox" value="'+ list[i].ID +'" class="checkBox"></td><td id="smallBox">' + number + '</td> <td>' + list[i].firstName + '</td> <td>' + list[i].lastName + '</td> <td>'
			+ list[i].status + '</td><td> <input id="edit" type="button" value="Edit" onClick="edit(this)"> <input type="button" value="Delete" onClick="deleteThisRow(this); deleteInDb(\''+ list[i].firstName +'\', \''+ list[i].lastName +'\' )" id="'+ list[i].ID +'"> </td></tr>');
			number++;
		}
		
	}
	
	function clearDialogAndInputFields(){
		var selectAll = document.querySelectorAll(".inputs");
		for(var i in selectAll){
			selectAll[i].value = '';
		}
	}


function removeCheckedRows(){
	$(".checkBox:checked").each(function(){
		deleteById($(this).attr('value'));
		var checkboxId = $(this).attr('value');
		checkedBoxes.push(checkboxId);
	});
	JsArrayToPhp(checkedBoxes);
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

function generateRandomID(row){
	var i = Math.random().toString(36).substr(2, 9);
	row.setAttribute("value", "" + i);

	
}	

function edit(e){
	$('#wrapper').dialog('open');
	clearDialogAndInputFields();
	ChangeDisplayOfEditAndAddButtons("initial", "none");
	 var index = $(e).closest("tr").index();
	 storedIndex.push(index);
	 document.getElementById("saveEdit").value = contactList[index].ID;
	document.getElementById("firstName").value = contactList[index].firstName;
	document.getElementById("lastName").value = contactList[index].lastName;
	document.getElementById("status").value = contactList[index].status;
	document.getElementById("yearOfBirth").value = contactList[index].yearOfBirth;
	document.getElementById("address").value = contactList[index].address;
	document.getElementById("phoneNumber").value = contactList[index].phoneNumber;
	
}

function saveEdit(i){
	
	contactList[i].firstName = document.getElementById("firstName").value;
	contactList[i].lastName = document.getElementById("lastName").value;
	contactList[i].status = document.getElementById("status").value;
	contactList[i].yearOfBirth = document.getElementById("yearOfBirth").value;
	contactList[i].address = document.getElementById("address").value;
	contactList[i].phoneNumber = document.getElementById("phoneNumber").value;
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function lettersOnly(evt) {
       evt = (evt) ? evt : event;
       var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
          ((evt.which) ? evt.which : 0));
       if (charCode > 31 && (charCode < 65 || charCode > 90) &&
          (charCode < 97 || charCode > 122)) {
          return false;
       }
       return true;
     }
function ChangeDisplayOfEditAndAddButtons(editAttribute, addAttribute)
{
	document.getElementById("saveEdit").style.display = editAttribute;
	document.getElementById("addButton").style.display = addAttribute;
}

function SortAlphabetically(list, sortBy){
	
	function sortByKey(a,b){
		var x = a[sortBy].toUpperCase(); 
        var y = b[sortBy].toUpperCase(); 
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	}
	list.sort(sortByKey);
}

function deleteInDb(fn, ln)
{
	window.location.href= "functions.php?firstname=" + fn + "&lastname=" + ln;
}


function setValue(id, val)
{
	var idof = document.getElementById(id);
	idof.setAttribute("value", val);	
}

function JsArrayToPhp(arrayToConvert){
	window.location.href = 'functions.php?arr=' + JSON.stringify(arrayToConvert);
	
}