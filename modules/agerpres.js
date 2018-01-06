agerpres = {
    init: function () {
        xml2js = require('xml2js');

        animateTitleIn("Știri via AGERPRES");
        animateBackground("#011857");

        setTimeout(function()
        {
            setContents(`
        <p class = "label" id ="newstitle" 
        style="overflow:visible; height:auto; font-size:5vw; position:fixed; bottom: 5px;" ></p>
        `);
        
        // get data
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            xml2js.parseString(xhttp.responseText,
                function(err, result)
                {
                    animateTitleOut();
                    displaySlideTitle("Știri");
                    newsData = result;
                    agerpres.newsDataIndex = 0;
                    agerpres.cycle();
                    agerpres.newsInterval = setInterval(agerpres.cycle,3500);
                });
            }
        };
        xhttp.open("GET", "https://www.agerpres.ro/cultura.rss", true);
        xhttp.send();

        },500);
    },

    cycle: function() {
        imageSrc = newsData.rss.channel[0].item[agerpres.newsDataIndex].image[0].url[0];
        lastCommaIndex = imageSrc.lastIndexOf(',');
        if (lastCommaIndex != -1)
            imageSrc = imageSrc.substr(0,lastCommaIndex);
        changeLabelTextWithAnimation("newstitle",newsData.rss.channel[0].item[agerpres.newsDataIndex].title);
        animateBackgroundImage("http:" + imageSrc);
        agerpres.newsDataIndex++;
    },

    exit: function() {
        clearTimeout(agerpres.newsInterval);
        hideAllLabels();
        animateSlideTitleOut();
        setContents('');
        animateBackgroundImage('');
    },

    preferredDuration: 40000
};