(function () {
    var wait = function (secs) {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, secs * 1000);
        });
    };

    var blink = function (state) {
        if (state) {
            document.getElementsByTagName("h1")[0].style.display = "none";
        } else {
            document.getElementsByTagName("h1")[0].style.display = "";
        }
        wait(0.3)
            .then(function () {
                blink(!state);
            });
    };

    window.onload = function () {
        blink(true);
    };
}());