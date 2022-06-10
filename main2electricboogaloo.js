var scene = document.querySelector('a-scene'),
i = 1;
const words = [
    "Virtual Reality, and it's use\n in treating Mental Illness", 
    "I need a second line of words\n to make sure this works.",
    "A 3rd line is always nice."
];

AFRAME.registerComponent('maincomp', {
  init: function () {
    run();
  }
});

function run() {
    alert("ran");
    var text = scene.querySelector("#words");
    alert("got text object");
    text.setAttribute("text", "value", "a");
    alert("changed text");
//     while (i < words.length) {
//         await new Promise(r => setTimeout(r, 5000));
//         console.log(text.getAttribute("text").value);
//         i++;
//     };
};