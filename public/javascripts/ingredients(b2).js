$(function() { // when DOM is fully loaded...
    $("#addedList").html("<tbody><tr><td></td></tr></tbody>");

    for(i=0; i<25; i++){
        $(".invisible").append("<input type='text' value='' name='amount_" + i + "'>");
        $(".invisible").append("<input type='text' value='' name='unit_" + i + "'>");
        $(".invisible").append("<input type='text' value='' name='ing_" + i + "'>");
        $(".invisible").append("<input type='text' value='' name='prep_" + i + "'>");
    }

    var count = 0;
    $("#addIng").click(function(){
        var text;
        
        // add to the display table/secret inputs
        $("#addedList tbody").append("<tr>");
        text = $("#amount").val();
        $("#addedList tbody").append("<td class='tblAmount'>" + text + "</td>");
        $("input[name*='amount_" + count + "']").attr("value", text);
        /* DEBUG */ console.log("Called");
        text = $("#unit").val();
        $("#addedList tbody").append("<td class='tblUnit'>" + text + "</td>");
        $("input[name*='unit_" + count + "']").attr("value", text);
        text = $("#ing").val();
        $("#addedList tbody").append("<td class='tblIng'>" + text + "</td>");
        $("input[name*='ing_" + count + "']").attr("value", text);
        text = $("#prep").val();
        $("#addedList tbody").append("<td class='tblPrep'>" + text + "</td>");
        $("input[name*='prep_" + count + "']").attr("value", text);
        // $("#addedText tbody").append("<td><button class='delete' id='" + i + "'>-</button></td>");
        $("#addedList tbody").append("</tr>");

        // wipe input fields
        $(".ingredients").val("");
        
        count++;
    });
});
















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