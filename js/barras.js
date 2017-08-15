	$(document).ready(function(){
		$("#toggle01").hover(function(){
			$('#rectangulo4').show("fast");
      	$('#rectangulo5').hide("fast");
        $('#rectangulo6').hide("fast");

		 });
     $("#toggle02").hover(function(){
 			$('#rectangulo5').show("fast");
       	$('#rectangulo4').hide("fast");
         $('#rectangulo6').hide("fast");

 		 });
     $("#toggle03").hover(function(){
 			$('#rectangulo6').show("fast");
       	$('#rectangulo4').hide("fast");
         $('#rectangulo5').hide("fast");

 		 });
		 $("#toggle04").hover(function(){
 			$('#rectangulo4').show("fast");
       	$('#rectangulo5').hide("fast");
         $('#rectangulo6').hide("fast");

 		 });
      $("#toggle05").hover(function(){
  			$('#rectangulo5').show("fast");
        	$('#rectangulo4').hide("fast");
          $('#rectangulo6').hide("fast");

  		 });
      $("#toggle06").hover(function(){
  			$('#rectangulo6').show("fast");
        	$('#rectangulo4').hide("fast");
          $('#rectangulo5').hide("fast");

  		 });
	});
