//init svgeezy
svgeezy.init(false, 'png');

//init timer
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Apr 18, 2020 09:30:00').getTime(),
  x = setInterval(function() {

      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    
    //do something later when date is reached
    //if (distance < 0) {
    //  clearInterval(x);
    //  'IT'S MY BIRTHDAY!;
    //}
}, second)

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




