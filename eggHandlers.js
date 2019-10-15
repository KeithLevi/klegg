"use strict";
/* global egg */

{
    const outputDiv = document.getElementById("outputDiv");
    const inputDiv = document.getElementById("inputDiv");

    const aboutEggLink = document.getElementById("aboutEgg");
    aboutEggLink.onclick = handleAboutEgg;

    const tryBtn = document.getElementById("tryBtn");
    tryBtn.onclick = handleTryBtn;

    /**
     * This click handler puts info about Egg into the output div
     * @returns {undefined} No return, writes to outputDiv
     */
    function handleAboutEgg(){
        outputDiv.innerText = "Egg is a tiny, simple language—but one that is powerful enough to express any computation you can " +
        "think of. It will allow simple abstraction based on functions.";
    }

    /**
     * click handler for the Try it Yourself button executes the entered code with Egg and puts result into outputDiv
     * @returns {undefined} No return, writes to outputDiv
     */
    function handleTryBtn() {
        const eggCode = inputDiv.value;
        outputDiv.innerText = egg.run(eggCode);
    }
}