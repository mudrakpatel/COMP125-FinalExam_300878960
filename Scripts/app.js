/**
 * @ Author: Mudrak Patel
 * @ student ID: 300878960
 * @ Comp125_ClientSideWebDevelopment
 */
var core;
(function(core) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var stage;
    //stage = new createjs.Stage(canvas);
    var RollButton = new createjs.Bitmap("Assets/images/rollButton.png");
    RollButton.x = 200;
    RollButton.y = 400;
    var Dice1 = new createjs.Bitmap("Assets/images/blank.png");
    Dice1.x = 100;
    Dice1.y = 200;

    var Dice2 = new createjs.Bitmap("Assets/images/blank.png");
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.addChild(RollButton);
        stage.enableMouseOver(20);
        RollButton.addEventListener("click", RollButtonClicked);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }

    function gameLoop() {

        stage.update();
    }

    function main() {

    }
    /**
     * @ function : RollButtonClicked
     * @ return : void
     * @ purpose : handles the click event of the RollButton
     */
    function RollButtonClicked() {
        var RandomNumber = Math.floor(Math.random() * 6) + 1;
        console.log("The random number is: " + RandomNumber);
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