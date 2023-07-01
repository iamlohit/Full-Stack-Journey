// $("h1").click(function (){
//     $("h1").css("color", "purple");
// });

// Using jQ to write event listeners and change CSS.

// $(document).keypress(function (event){
//     $("h1").text(event.key);
// });

// Using jQ to change the HTML Text or InnerHTML

// $("h1").on("click", function() {
//     $("h1").css("color", "red");
//     $("h1").before("<button>Click Me</button>");
// });

// Using jQ to add HTML elements.

// $("button").on("click", function() {
//     $("h1").hide();
// });

// Using jQ to playing the hide animation.

// $("button").on("click", function() {
//     $("h1").Toggle();
// });

// Using jQ to Toggle the hide animation.

// $("button").on("click", function() {
//     $("h1").fadeOut();
// });

// Using jQ to Animate using fade out feature.

// $("button").on("click", function() {
//     $("h1").fadeToggle();
// });

// Using jQ to toggle between fade In and Out

// $("button").on("click", function() {
//     $("h1").slideToggle();
// });

// Using jQ to Slide H1 up and down

// $("button").on("click", function() {
//     $("h1").animate({opacity: 0.5});
// });

// Using jQ to change the opacity of the H1 element.

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

// Using jQ to chain animations together.