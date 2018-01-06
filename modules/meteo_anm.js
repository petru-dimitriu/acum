meteo_anm = {
    init: function () {

        animateTitleIn("Meteo ANM");

        setContents(`
        <img src="http://www.meteoromania.ro/images/clima/temperatura_orara.png" style="width:0px; height:0px;"></img>
        `);

        animateBackground("#070046");

        setTimeout(() => {
            animateBackgroundImage('http://www.meteoromania.ro/images/clima/temperatura_orara.png');
    
            setTopRightContents(`
                <p class = "label" id ="source">Sursa: ANM</p>
            `);
            animateTitleOut();
            displaySlideTitle("România","#070046");
            displayAllLabels();
        }, 1000);
    },

    exit: function () {
        hideAllLabels();
        animateSlideTitleOut();
        animateBackgroundImage('');
    },

    preferredDuration: 15000
};