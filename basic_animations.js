$ = require('jquery');
require('jquery-ui');

function animateTitleIn(newTitle)
{
    //console.log($("#title").css("opacity"));
    $("#title #text").show();
    $("#title #text").html(newTitle);
    $("#title").css("height","auto");
    $("#title #before").addClass('underlineAnimate');
    $("#title #after").addClass('underlineAnimate');
    $("#title").css("opacity",1);
}

function animateTitleOut()
{
    $("#title").animate({height : 0}, 300, "swing", function(){
        $("#title").css("opacity",0);
        setTimeout(() => {$("#title #before").removeClass('underlineAnimate');
        $("#title #after").removeClass('underlineAnimate');},300);
    });
}

function displaySlideTitle(newTitle, color)
{
    $("#slideTitle").html(newTitle);
    $("#slideTitle").css("width","70%");
    $("#slideTitle").css("color",color);
    $("#slideTitle").animate({width: "auto"}, 500);
}

function animateSlideTitleOut()
{
    $("#slideTitle").animate({width: 0}, 500);
}

function changeBackgroundColor(color)
{
    $("body").animate({backgroundColor: color}, 200);
}

function displayAllLabels()
{
    $(".label").css("display","none");

    $(".label").each(function () {
        $(this).css("width","auto");
        computedWidth = $(this).outerWidth();
        $(this).css("display","block");
        $(this).css("width",0);
        $(this).animate({width : [computedWidth+5, "swing"], opacity: 1}, 500);
    });
}

function displayLabel(id)
{
    $("#"+id).css("display","none");

    $("#"+id).css("width","auto");
    $("#"+id).css("height","auto");
    computedWidth = $("#"+id).outerWidth();
    computedHeight = $("#"+id).outerHeight();
    $("#"+id).css("display","block");
    $("#"+id).css("width",0);
    $("#"+id).css("height",computedHeight);
    $("#"+id).animate({width : [computedWidth+5, "swing"], opacity: 1}, 200);
}

function hideAllLabels()
{
    $(".label").animate({width : [0, "swing"], opacity: 0}, 400);
}

function hideLabel(id, callback)
{
    $("#"+id).animate({width : [0, "swing"], opacity: 0}, 200, callback);
}

function setLabelFontSize(id, size, rectSize)
{
    currentHeight = $("#"+id).outerHeight();
    currentWidth = $("#"+id).outerWidth();

    $("#" + id).animate({fontSize : size + "px",}, 200);
    $("#" + id).css({height : rectSize + "px", width: (rectSize/currentHeight) * currentWidth}, 200);
}

function setLabelColor(textColor, bgColor)
{
    $("#" + id).animate({color : [textColor, "swing"], backgroundColor: bgColor, opacity: 1}, 500);
}

function changeLabelTextWithAnimation(id,text)
{
    hideLabel(id, function() {
        $("#"+id).html(text);
        displayLabel(id);
    })
}

function animateBackground(bgColor)
{
    $("body").animate({backgroundColor : bgColor}, 500);
}

function animateBackgroundImage (newimage, width, height)
{
    $('#backgroundImage').animate({opacity: 0}, 500, function() {
        if (newimage !== '') {
            $('#bgImg').attr("src",newimage); 
            $('#bgImg').css("width",width == null ? "100%" : width);
            $('#bgImg').css("height",height == null ? "100%" : height);
            $('#backgroundImage').animate({opacity: 1}, 500, function() {
            });
        }
    });
}

function setTitleText(text)
{
    $("#title #text").html(text);
}

function setContents(contents)
{
    $("#contents").html(contents);
}

function setTopRightContents(contents)
{
    $("#topright").html(contents);
}