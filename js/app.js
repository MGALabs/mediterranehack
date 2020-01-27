//init svgeezy
svgeezy.init(false, 'png');

//init slick
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button type="button" class="slick-prev fas fa-chevron-left">Previous</button>',
  nextArrow: '<button type="button" class="slick-next fas fa-chevron-right">Next</button>'
});

$(document).ready(function() {
  $('#mc_embed_signup_2').validetta({
    realTime : true,
    bubblePosition: 'bottom',
    bubbleGapLeft: -9,
    bubbleGapTop: 12
  });
  $('#mc_embed_signup').validetta({
    realTime : true,
    bubblePosition: 'bottom',
    bubbleGapLeft: -9,
    bubbleGapTop: 12
  });
  $('#mc_embed_signup_3').validetta({
    realTime : true,
    bubblePosition: 'bottom',
    bubbleGapLeft: -9,
    bubbleGapTop: 12
  });
});

//sidebar 
$(document).ready(function () {
	$("#sidebar").mCustomScrollbar({
		theme: "minimal"
	});

	$('#dismiss, .overlay').on('click', function () {
		$('#sidebar').removeClass('active');
		$('.overlay').removeClass('active');
	});

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').addClass('active');
		$('.overlay').addClass('active');
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});
});    



