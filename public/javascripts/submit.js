// how to add directions and ingredients array to submission
// if cook/prep hrs or mins are blank add a 0
// if there is still something inside one of the dynamic inputs, throw up a warning
// maybe take them to the recipe page when done (rather than the recipe book) to easily confirm it was added?
// require recipe name for submission
// hitting enter adds direction/ingredient
// limit number of directions and ingredients to 25 each? Maybe 30?


function submission() {
  // Directions input not empty warning
  direction_input = $("#directions").val(); // could I use one variable called input for all checks?
  if(direction_input != "") {
      alert("There is still text inside of the directions input that will be lost.")
  }

  // Need ingredient inputs not empty warning
}


// $(function() {
//   // doc ready stuff here
// });


// function submission(){
//     // direction_input = $("#directions").val();
//     /* DEBUG */ alert("Hello");
//     // if(direction_input != "") {
//     //     alert("There is still text inside of the directions input that will be lost if you continue. Proceed?")
//     // } else {
//     //     alert("Nothing in the text field.");
//     // }
// }
