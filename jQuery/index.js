// $("h1").click(function (){
//     $("h1").css("color", "purple");
// });

// $(document).keypress(function (event){
//     $("h1").text(event.key);
// });

$("h1").on("click", function() {
    $("h1").css("color", "red");
    $("h1").before("<button>Click Me</button>");
});