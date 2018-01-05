currentTime = {
    init: function () {
        animateTitleIn(getTime());
        currentTime.timeTicker = setInterval(function() {
            setTitleText(getTime());
        }, 1000);
        setContents('');
        setTopRightContents(`
            <p class = "label" id ="currentDate">Test</p>
        `);
        changeLabelTextWithAnimation("currentDate",getDate());
        animateBackground("black");
        animateBackgroundImage('modules/clock.png',"50vh","50vh");

        function getTime()
        {
            var d = new Date();
            if (d.getSeconds() % 2 == 0)
                return ((d.getHours() < 10 ? '0' : '') + d.getHours() 
                + ":" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes());
            else
                return ((d.getHours() < 10 ? '0' : '') + d.getHours() 
                + " " + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes());
        }

        function getDate()
        {
            var d = new Date();
            return (d.getDate() < 10 ? '0' : '') + d.getDate() 
                + "." + (d.getMonth() < 11 ? '0' : '') + (d.getMonth()+1)
                + "." + d.getFullYear();
        }
    },

    exit: function() {
        clearTimeout(currentTime.timeTicker);
        hideAllLabels();
        animateTitleOut();
        animateBackgroundImage('');
    },

    preferredDuration: 4000
};