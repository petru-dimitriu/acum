iasiLive = {
    init: function () {
        setTopRightContents(`
            <p class = "label" id ="live" style="background-color:red;"></p><br><br><br>
            <p class = "label" id ="loc">Piața Unirii</p>
        `);
        iasiLive.index = -1;
        iasiLive.camSrc =
        [ "http://82.208.151.106/record/current.jpg",
           "http://82.208.167.240:8055/record/current.jpg",
           "http://82.208.167.240:8054/record/current.jpg"
    ];
        iasiLive.camLoc =
        [ "Piața Unirii",
            "Bulevardul Independenței",
            "Copou"
    ];
        setContents(`
        <div id="webviewContainer">
        <img id="webcam" style="width:100vw; height:100vh;"></img>
        </div>
        `);
        
        changeLabelTextWithAnimation("live","LIVE");
        
        iasiLive.cycle();
        iasiLive.cycleInterval = setInterval(iasiLive.cycle,13000);

        iasiLive.webcamUpdate = setInterval(() => {
            $("#webcam").attr('src',iasiLive.camSrc[iasiLive.index] + '?counter=' + (new Date()).getTime());
        },1000);
        iasiLive.liveBlinkingInterval = setInterval(() => { 
            $("#live").css("opacity",1);
            $("#live").animate({opacity: 0.7},500);
        }, 1000);
        
        animateBackground("black");
        displaySlideTitle("Iași");

    },

    cycle: function()
    {
        iasiLive.index = (iasiLive.index+1)%iasiLive.camLoc.length;
        changeLabelTextWithAnimation("loc",iasiLive.camLoc[iasiLive.index]);
    },

    exit: function() {
        clearTimeout(iasiLive.liveBlinkingInterval);
        clearTimeout(iasiLive.webcamUpdate);
        clearTimeout(iasiLive.cycleInterval);
        hideAllLabels();
        animateSlideTitleOut();
        setContents('');
        animateBackgroundImage('');
    },

    preferredDuration: 120000
};