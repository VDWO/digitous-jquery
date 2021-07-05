$("button").click(function(){
    var variable = $("input").val();
    console.log(variable)
    $.ajax({
        url: `https://restcountries.eu/rest/v2/name/${variable}`,
        success: function(data, statuts, response) {
            $("#country").html(data[0].name);
            $("#capital").html(data[0].capital);
        }
    });
});