$("input").keyup(function(){
    var variable = $("input").val();
    console.log(variable) 
    if (variable.length > 5){
        $("input").removeClass("is-invalid");
        $("input").addClass("is-valid");
    } else {
        $("input").removeClass("is-valid", );
        $("input").addClass("is-invalid");
    }
});