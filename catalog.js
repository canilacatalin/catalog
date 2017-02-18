
 $(document).ready(function() {

                $('#wrapper').dialog({
                    autoOpen: false,
                    title: 'Informations:',
					 height: 400,
					 width: 1000,
					 show: {
                 effect: "fade",
                 duration: 1000
				},
             hide: {
                 effect: "fade",
                 duration: 500
             }
                });
                $('#opener').click(function() {
                    $('#wrapper').dialog('open');
//                return false;
                });
            });
