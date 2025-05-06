// $(window).scroll(function(){
//     var a = $(window).scrollTOP()

//     if(a > 100 ){
//         alert("whattttt")
//     }
// })

$(document).ready(function() {
    $(window).scroll(function() {
        var a = $(window).scrollTop();

        if (a > 100){
            $("#nav").css("visibility", "visible")
        }
    })
})