$(function() { // when DOM is fully loaded...
    var ingList = [];
    var ingredient = {};

    $("#addIng").click(function(){
        // pull input text into ingredient object
        ingredient = {
            amount: $("#amount").val(),
            unit: $("#unit").val(),
            ingredient: $("#ing").val(),
            preparation: $("#prep").val()
        };

        // add ingredient to ingList array for temp storage until submit
        // (Do I still need this?)
        ingList.push(ingredient);

        // clear old addedList table
        $("#addedList").html("<tbody><tr><td></td></tr></tbody>");

        // display new ingList at addedList table
        for(i=0; i<ingList.length; i++) {
            $("#addedList tbody").append("<tr>");
            // $("#addedList tbody").append("<td class='tblAmount iAmount" + i + "'>" + ingList[i].amount + "</td>");
            $("#addedList tbody").append("<td class='tblAmount' id='iAmount" + i + "'>" + ingList[i].amount + "</td>");
            $("#addedList tbody").append("<td class='tblUnit iUnit" + i + "'>" + ingList[i].unit + "</td>");
            $("#addedList tbody").append("<td class='tblIng iIng" + i + "'>" + ingList[i].ingredient + "</td>");
            $("#addedList tbody").append("<td class='tblPrep iPrep" + i + "'>" + ingList[i].preparation + "</td>");
            // $("#addedText tbody").append("<td><button class='delete' id='" + i + "'>-</button></td>");
            $("#addedList tbody").append("</tr>");

            // wipe input fields
            $(".ingredients").val("");
        }

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