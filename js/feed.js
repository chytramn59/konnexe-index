$(document).ready( function() {
	
	$('.btn-file :file').on('fileselect', function(event, label) {

		var input = $(this).parents('.input-group').find(':text'),
		log = label;

		if( input.length ) {
			input.val(log);
		} else {
			if( log ) alert(log);
		}

	});
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				debugger
				$('#img-upload').attr('src', e.target.result);
			}

			reader.readAsDataURL(input.files[0]);
		}
	}

	$("#imgInp").change(function(){ 
		readURL(this);
	});
	

	$('#hit').click(function() {
	// <img src="data:image/jpeg;base64,>
	
     $("#displaysubs").show();
    var text = $('#searchinput').val();
    // var text1 = $("#img-upload").val();
    debugger;
    // var basestring= $('#img-upload').attr('src')
    var basestring= $('#img-upload').attr('src')
    var text2 = $("#bpost").val();

    var image = `<img src="${basestring}" width="160px" height="120px">`;
    // var image = '<img src="'+ basestring +'" width="250px" height="250px">';
    var mtitle = '<h4 >'+ text + '</h4>';
    var mpost = '<h6>' + text2 + '</h4>';
    var script = "<script type='text/javascript'> 	$('#like').click(function(){$(this).css('background','#008B8B');}); </script>"
    $('#displaysubs').append('<div class="media-left row col-sm-2 col-md-2 col-lg-2 col-xs-2"><img src="./images/33.jpeg" class="img-circle" width alt="error" id="pimg"/></div><div class="media-body" style="padding-left:35px"><h4 class="media-heading allshow">Varginias Paterson</h4><h6>Designation/Status</h6><br/>' + mtitle + mpost + image + '</div><div class="row"><div class="col-sm-10 col-md-9 col-lg-10 col-xs-10"><img src="./images/chat.png" class="fontsize chat" ><span>325</span></div><div class="col-sm-2 col-md-3 col-lg-2 col-xs-2"><img id="like" src="./images/3.png" class="fontsize chat"><span>225</span></div><hr/>'+script);
	});

	$("#like1").click(function(){
	debugger;
	// $("#like1").toggle();
	 $(this).css('background', '#008B8B');
	});



	$("#like2").click(function(){
	debugger;
	 $(this).css('background', '#008B8B');
	});

	$("#like3").click(function(){
	debugger;
	 $(this).css('background', '#008B8B');
	});
	$("#like4").click(function(){
	debugger;
	 $(this).css('background', '#008B8B');
	});

	
	$("#searchclear").click(function(){
    $("#searchinput").val('');
	});


});