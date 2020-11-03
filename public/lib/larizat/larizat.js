function myFunction(x) {
 var isActive = x.classList.toggle('change');
  if(isActive == true){
  	$('#nav-main-content').animate({height: 'show'}, 'slow');
    $('#nag').addClass('nav-reduce');
	$('#nag').removeClass('nav-increase');
  }
  if(isActive == false){
  	$('#nav-main-content').hide();
  } 
}

function myFunction1(x){
 var isActive = x.classList.toggle('change');
  if(isActive == true){
  	$('#nav-medium-content').animate({height: 'show'}, 'slow');
    $('#nag').addClass('nav-reduce');
	$('#nag').removeClass('nav-increase');
  }
  if(isActive == false){
  	$('#nav-medium-content').hide();
	

  } 
}

window.addEventListener('load', function(){
   $('#loader-container').show();
  setTimeout(()=>{
    $('#loader-container').hide();
      $('#main-content').show();
  },5000)
     console.log('working');
  });

//document.getElementById('main-content').style.display = 'block'

$(document).ready(function(){


$(".dropdown-toggle").click(function(e){
  e.preventDefault();
  $(".dropdown-menu").toggle();
});



$(window).scroll(function(){
	var height = 40; 
  var height2 =600;
	var top = 1200;
	if($(window).scrollTop() > height){
	$('#nag').addClass('nav-reduce');
	$('#nag').addClass('nav-shadow');
	$('#nag').removeClass('nav-increase');
	}
	else{
	//document.getElementById('nav-medium-content').style.display = "none";
	$('#nag').addClass('nav-increase');
	$('#nag').removeClass('nav-shadow');
	$('#nag').removeClass('nav-reduce');	
	}
  if($(window).scrollTop()>height2){
      $('#footer').addClass('ds-block');
    }
    else{
     // $('#footer').addClass('ds-none');
      $('#footer').removeClass('ds-block');
    }
});

/*******initialize wow*******/
new WOW().init();

$('.sub-services-num').counterUp({
		delay: 15,
		time: 2000
	});
	/*--/ Testimonials owl /--*/
$('#testimonials-owl').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 50000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
});

if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}


  $('#comment-form').validate({
    rules:{
      comments:{
        required:true,
        maxlength:100,
      },
    },
    messages:{
      comments:{
        required:"comment field cannot be empty",
        maxlength:"Please enter at least 100 characters."
      },
    },
    
  });

//sending comments over
$('#comment-button').click(function(e){
	e.preventDefault();

    if($('#comment-form').valid()){
      
     var _token = $("input[name = '_token']").val();
     var comments = $("textarea[name = 'comments']").val();
     var post_id = $("input[name = 'post_id']").val();
      
   	var action = $('#comment-form').attr('action');
    //}
       $.ajax({
         url: action,
         type:'POST',
        data:{_token:_token, comments:comments, post_id:post_id, action:action},
         success: function(data){
          if(!($.isEmptyObject(data.errors))){
          	//alert(data.errors);
          }
          if(!($.isEmptyObject(data.success))){
          	var commentLength = data.success.length-1;
            var date = new Date(data.success[commentLength].created_at);
            var str_date = date.toString();
             /*$('#showcomments').append(
             	'<span>'+ data.success[commentLength].fname +'</span>');*/
             $('#showcomments').append(
             	'<span>'+ data.success[commentLength].comments +'</span>');
             $('#showcomments').append(
             	'<p>'+ str_date.slice(4, 24)+'</p>');
            
             $('#comments').val('');
          	//console.log(data.success[0].fname);
          }
         },
           error:function(xhr, status, error){
          //alert(xhr.responseText);
         },
        
      });

}
  });

//image upload
$('#input-logo').change(function(event){
    var tmppath = URL.createObjectURL(event.target.files[0]);
$("#img-logo").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));  
$("#logo-title").text(event.target.files[0].name).css({'color': 'black'});
});

});


