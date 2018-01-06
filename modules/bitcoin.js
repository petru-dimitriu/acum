bitcoin = {
    init: function () {

        animateTitleIn("Curs Bitcoin");
        animateBackground("#cc8e08");
        animateBackgroundImage('modules/bitcoin.png',"50vh","50vh");

        setContents(`
        <p class = "label" id ="bitcoinRON" style="background-color:#7a5503; color:black; font-size:10vh;"></p>
        <p class = "label" id ="bitcoinUSD" style="background-color:#7a5503; color:black; font-size:10vh;" ></p>
        `);

        setTopRightContents(`
            <p class = "label" id ="source">Sursa: Coindesk</p>
        `);

        // get data
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                animateTitleOut();
                bitcoinData = JSON.parse(xhttp.responseText);
                changeLabelTextWithAnimation("bitcoinUSD", "1 BTC = " + bitcoinData.bpi.USD.rate + " USD");
                changeLabelTextWithAnimation("bitcoinRON", "1 BTC = " +  bitcoinData.bpi.RON.rate + " RON");
                changeLabelTextWithAnimation("source","Sursa: Coindesk");
                displaySlideTitle("Curs Bitcoin","black");
            };
        };
        xhttp.open("GET", "https://api.coindesk.com/v1/bpi/currentprice/RON.json", true);
        xhttp.send();
    },

    exit: function () {
        hideAllLabels();
        animateSlideTitleOut();
        animateBackgroundImage('');
    },

    preferredDuration: 10000
};