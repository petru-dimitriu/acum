issLive = {
    init: function () {
        setTopRightContents(`
            <p class = "label" id ="live" style="background-color:red;"></p><br><br><br>
            <p class = "label" id ="loc">International Space Station</p>
        `);
        setContents(`
        <div id="webviewContainer">
        <iframe width="` + $('body').width() + `" height="` + $('body').height() + `" src="http://www.ustream.tv/embed/9408562?html5ui&autoplay=true" scrolling="no" allowfullscreen webkitallowfullscreen frameborder="0" style="border: 0 none transparent;"></iframe>
        </div>
        `);
        changeLabelTextWithAnimation("live","LIVE");
        changeLabelTextWithAnimation("loc","International Space Station");
        issLive.liveBlinkingInterval = setInterval(() => { 
            $("#live").css("opacity",1);
            $("#live").animate({opacity: 0.7},500);
        }, 1000);
        
        animateBackground("black");

    },

    exit: function() {
        clearTimeout(issLive.liveBlinkingInterval);
        hideAllLabels();
        animateSlideTitleOut();
        setContents('');
        animateBackgroundImage('');
    },
    
    preferredDuration: 10000
};