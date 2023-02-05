

function audioPlayer()
{
    var trenutnapesma = 0;

    $("#audioPlayer")[0].src = $("#pesme li a ")[0];
    $("#audioPlayer")[0].play();
    $("#pesme li a").click(function(e){
        e.preventDefault();
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
        $("#pesme li").removeClass("trenutna-pesma");
        trenutnapesma = $(this).parent().index();
        $(this).parent().addClass("trenutna-pesma");
    });

    $("#audioPlayer")[0].addEventListener("ended", function(){
        trenutnapesma++;
        if (trenutnapesma == $("#pesme li a").length)
            trenutnapesma = 0;
        $("#pesme li").removeClass("trenutna-pesma");
        $("#pesme li:eq("+trenutnapesma+")").addClass("trenutna-pesma");
        $("#audioPlayer")[0].src = $("pesme li a")[trenutnapesma].href;
        $("#audioPlayer")[0].play();
    });
}