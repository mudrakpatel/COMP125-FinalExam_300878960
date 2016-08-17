var core;
(function(core) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var stage;
    stage = new createjs.Stage(canvas);
    var RollButton = new createjs.Bitmap("Assets/images/rollButton.png");
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.addchild(RollButton);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }

    function gameLoop() {

        stage.update();
    }

    function main() {

    }

    function RollButtonClicked() {
        var RandomNumber = Math.floor(Math.random() * 6) + 1;
        switch (RandomNumber) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            default:
                break;
        }
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map