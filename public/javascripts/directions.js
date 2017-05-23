$(function() { // when DOM is fully loaded...
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
