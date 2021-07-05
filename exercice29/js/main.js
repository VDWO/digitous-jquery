
$("button").click(function(){
    $("input").removeClass("is-valid", );
    $("input").removeClass("is-invalid");
    var variable = $("input").val();
    console.log(variable) 
    if (variable > 5){
        $("input").addClass("is-valid");
    } else {
        $("input").addClass("is-invalid");
    }
});