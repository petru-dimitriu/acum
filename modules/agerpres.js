agerpres = {
    init: function () {
        xml2js = require('xml2js');

        animateTitleIn("News via AGERPRES");
        animateBackground("#011857");

        setTimeout(function()
        {
            setContents(`
        <p class = "label" id ="newstitle" 
        style="overflow:visible; height:auto; font-size:5vw; position:fixed; bottom: 5px;" ></p>
        `);
        displaySlideTitle("News");
        
        // get data
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            xml2js.parseString(xhttp.responseText,
                function(err, result)
                {
                    animateTitleOut();
                    newsData = result;
                    agerpres.newsDataIndex = 0;
                    agerpres.cycle();
                    agerpres.newsInterval = setInterval(agerpres.cycle,3500);
                });
            }
        };
        xhttp.open("GET", "https://www.agerpres.ro/home.rss", true);
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