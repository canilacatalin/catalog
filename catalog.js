
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

		var nr = 0;
	$("#addButton").click(function(){
		nr+=1;
		var firstName = $("#firstName").val();
		var lastName = $("#lastName").val();
		var status = $("#status").val();
	if(firstName!="" && lastName!="" && status!="")
	{
		$("#myTable").append('<tr><td id="checkBox"><input type="checkBox"></td><td class="rowID" id="checkBox">' + nr + '</td> <td>' + firstName + '</td> <td>' + lastName + '</td> <td>' + status + 
		'</td> <td> <input id="edit" type="button" value="Edit" onClick="edit()"></td></tr>');
	}

		$('#wrapper').dialog('close');
		$("#firstName").val("");
		$("#lastName").val("");
		$("#status").val("");
		$("#phoneNumber").val("");
		$("#yearOfBirth").val("");
		$("#address").val("");
	
	});
	$(".deleteButton").click(function(){
		removeCheckedRows('myTable');
		$(".rowID").each(function(i) {
			$(this).text(i+1);
		});
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
			
			
			
			
			
			
			
			
			
			
			
			