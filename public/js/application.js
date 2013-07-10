$(document).ready(function() {

  $('.awesomeness').on('click', function(e) {
  	e.preventDefault();
  		$('.awesome').toggle("slow");
  });

  $('.notawesomeness').on('click', function(e) {
  	e.preventDefault();
  		$('.notawesome').toggle("slow");
  });

  $('.skill_teller').on('click', function(e){
  	e.preventDefault();
  		$('.skills').slideToggle('slow','linear');
  });
  $('.meal_teller').on('click', function(e){
  	e.preventDefault();
  		$('.meal').fadeToggle('slow','swing');
  });



  // What other events do you need to bind to make the other pages work?
});
