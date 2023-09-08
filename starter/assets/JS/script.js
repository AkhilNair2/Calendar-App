$(document).ready(function(){

    // listen for save button clicks

    $(".saveButton").on("click", function(){
        console.log(`It has been saved`);

        let timeID = $(this).parent().attr("id");
        let value = $(this).siblings(".description").val();

        console.log(timeID);
        console.log(value);

        localStorage.setItem(timeID, value);


        $(".notification").addClass('Show');
        

        setTimeout(function(){
            $(".notification").removeClass("Show");
        }, 5000)
    })

function hourUpdate(){
    let currentHour = moment().hours();
    console.log(currentHour);


}

hourUpdate();





})