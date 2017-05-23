$(function() { // when DOM is fully loaded...
    $("#addedList").html("<tbody><tr><td></td></tr></tbody>");
    $("#stepList").html("<tr></tr>"); // needed?

    var ing_count = 0;
    var text;
    $("#addIng").click(function(){
        $("#addedList tbody").append("<tr>");

        text = $("#amount").val();
        $(".invisible").append("<input type='text' value='" + text + "' name='amount_" + ing_count + "'>");
        $("#addedList tbody").append("<td class='tblAmount'>" + text + "</td>");
        text = $("#unit").val();
        $(".invisible").append("<input type='text' value='" + text + "' name='unit_" + ing_count + "'>");
        $("#addedList tbody").append("<td class='tblUnit'>" + text + "</td>");
        text = $("#ing").val();
        $(".invisible").append("<input type='text' value='" + text + "' name='ing_" + ing_count + "'>");
        $("#addedList tbody").append("<td class='tblIng'>" + text + "</td>");
        text = $("#prep").val();
        $(".invisible").append("<input type='text' value='" + text + "' name='prep_" + ing_count + "'>");
        $("#addedList tbody").append("<td class='tblPrep'>" + text + "</td>");

        // $("#addedText tbody").append("<td><button class='delete' id='" + i + "'>-</button></td>");
        
        $("#addedList tbody").append("</tr>");

        // wipe input fields
        $(".ingredients").val("");
        
        ing_count++;
    });





    var step_count = 0;
    $("#addStep").click(function(){
        var direction = $("#directions").val();
        $("#stepList").append("<li>" + direction + "</li>");
        $(".invisible").append("<input type='text' value='" + direction + "' name='step_" + step_count + "'>");

        // wipe input fields
        $("#directions").val("");

        step_count++;
    });
    // need to tell it what to do with dirList when submit is pressed

    // need to add a delete step functionality

    // no more than 25 ing/steps
});






function submission() {
  // Directions input not empty warning
  direction_input = $("#directions").val(); // could I use one variable called input for all checks?
  if(direction_input != "") {
      alert("There is still text inside of the directions input that will be lost.")
  }
  ingredient_input = $("#amount").val(); // check all fields
  if(ingredient_input != "") {
      alert("There is still text inside of the directions input that will be lost.")
  }

  for(i=ing_count; i<25; i++){
    $(".invisible").append("<input type='text' value='' name='amount_" + i + "'>");
    $(".invisible").append("<input type='text' value='' name='unit_" + i + "'>");
    $(".invisible").append("<input type='text' value='' name='ing_" + i + "'>");
    $(".invisible").append("<input type='text' value='' name='prep_" + i + "'>");
  }
  for(i=step_count; i<25; i++){
      $(".invisible").append("<input type='text' value='' name='step_" + i + "'>");
  }

  // make empty prep/min hrs/mins 0s
}















    // var count = 0;

    // $("#addIng").click(function(){
    //     if(count<=24) {
    //         $("#addedList").append("<div id='item" + count + "'>");

    //         var text = $('#amount').val();
    //         $("#addedList").append("<input class='displayAmount display' type='text' name='amount_" + count + "' value='" + text + "' readonly>");

    //         text = $('#unit').val();
    //         $("#addedList").append("<input class='displayUnit display' type='text' name='unit_" + count + "' value='" + text + "' readonly>");

    //         text = $('#ing').val();
    //         $("#addedList").append("<input class='displayIng display' type='text' name='ingredient_" + count + "' value='" + text + "' readonly>");

    //         text = $('#prep').val();
    //         $("#addedList").append("<input class='displayPrep display' type='text' name='preparation_" + count + "' value='" + text + "' readonly>");
            
    //         // button to add/delete or check box
    //         // <input class='button' id='addIng' type='button' value='+'>

    //         $("#addedList").append("</div>");

    //         // wipe input fields
    //         $(".ingredients").val("");
    //     } else {
    //         alert("You cannot have more than 25 ingredients!");
    //     }

    //     count++;
    // });