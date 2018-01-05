brasovLive = {
    init: function () {
        setTopRightContents(`
            <p class = "label" id ="live" style="background-color:red;"></p><br><br><br>
            <p class = "label" id ="loc">Piața Sfatului</p>
        `);
        setContents(`
        <div id="webviewContainer">
        <webview id="webview" src="http://brasov-live.flashnet.ro/121.html" style="width:100vw; height:100vh;"></webview>
        </div>
        `);
        var webview = document.getElementById('webview');
        webview.addEventListener('dom-ready', () => 
        {
           //webview.getWebContents().executeJavaScript(`var a = 'foo'; alert(a); Promise.resolve(a);`)
           webview.executeJavaScript(`
                document.getElementsByTagName('body')[0].style.overflow = "hidden"; 
                document.getElementById('img').style.width = ` + $("body").width() + `; `
                + `document.getElementById('img').style.height = ` + $("body").innerHeight()); 
        }); 
        changeLabelTextWithAnimation("live","LIVE");
        changeLabelTextWithAnimation("loc","Piața Sfatului");
        brasovLive.liveBlinkingInterval = setInterval(() => { 
            $("#live").css("opacity",1);
            $("#live").animate({opacity: 0.7},500);
        }, 1000);
        
        animateBackground("black");
        displaySlideTitle("Brașov");

    },

    exit: function() {
        clearTimeout(brasovLive.liveBlinkingInterval);
        hideAllLabels();
        animateSlideTitleOut();
        setContents('');
        animateBackgroundImage('');
    },

    preferredDuration: 7000
};