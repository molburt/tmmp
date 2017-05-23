$(function() { // when DOM is fully loaded...
    $("#addedList").html("<tbody><tr><td></td></tr></tbody>");

    var ing_count = 0;
    var text;
    $("#addIng").click(function(){
        $(".invisible").append("<input type='text' value='' name='amount_" + ing_count + "'>");
        $(".invisible").append("<input type='text' value='' name='unit_" + ing_count + "'>");
        $(".invisible").append("<input type='text' value='' name='ing_" + ing_count + "'>");
        $(".invisible").append("<input type='text' value='' name='prep_" + ing_count + "'>");
        
        // add to the display table/secret inputs
        $("#addedList tbody").append("<tr>");
        text = $("#amount").val();
        $("#addedList tbody").append("<td class='tblAmount'>" + text + "</td>");
        $("input[name*='amount_" + ing_count + "']").attr("value", text);
        text = $("#unit").val();
        $("#addedList tbody").append("<td class='tblUnit'>" + text + "</td>");
        $("input[name*='unit_" + ing_count + "']").attr("value", text);
        text = $("#ing").val();
        $("#addedList tbody").append("<td class='tblIng'>" + text + "</td>");
        $("input[name*='ing_" + ing_count + "']").attr("value", text);
        text = $("#prep").val();
        $("#addedList tbody").append("<td class='tblPrep'>" + text + "</td>");
        $("input[name*='prep_" + ing_count + "']").attr("value", text);
        // $("#addedText tbody").append("<td><button class='delete' id='" + i + "'>-</button></td>");
        $("#addedList tbody").append("</tr>");

        // wipe input fields
        $(".ingredients").val("");
        
        count++;
    });





    var dirList = [];
    var direction = "";

    $("#addStep").click(function(){
        // pull input text into direction variable
        direction = $("#directions").val();

        // add direction step to dirList array for temp storage until submit
        dirList.push(direction);

        // clear old dirList at stepList
        $("#stepList").html("");

        // display new dirList at stepList
        for(i=0; i<dirList.length; i++) {
            $("#stepList").append("<li>"+dirList[i]+"</li>");
        }

        // wipe input fields
        $("#directions").val("");
    });
    // need to tell it what to do with dirList when submit is pressed

    // need to add a delete step functionality
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

  for(i=count; i<25; i++){
    $(".invisible").append("<input type='text' value='' name='amount_" + i + "'>");
    $(".invisible").append("<input type='text' value='' name='unit_" + i + "'>");
    $(".invisible").append("<input type='text' value='' name='ing_" + i + "'>");
    $(".invisible").append("<input type='text' value='' name='prep_" + i + "'>");
  }
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