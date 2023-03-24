"use strict";
(() => {
    let userId;
    userId = 12121;
    userId = 'test';
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLowerCase()}`);
        }
        else {
            console.log(`number ${myText.toFixed(1)}`);
        }
    }
    greeting('Test2');
    greeting(12);
})();
