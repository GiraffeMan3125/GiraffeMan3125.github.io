var scene = document.querySelector('a-scene'),
text = scene.querySelector("#words");
i = 1;
const words = [
    "Virtual Reality, and it's use\n in treating Mental Illness", 
    "I need a second line of words\n to make sure this works.",
    "A 3rd line is always nice."
];

alert("script is running");

AFRAME.registerComponent('maincomp', {
    init: function () {
        alert("ran");
        // this.el.setAttribute("text", "value", "a");
        // while (i < words.length) {
        //     await new Promise(r => setTimeout(r, 5000));
        //     i++;
        // }
    }
});