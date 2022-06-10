var scene = document.querySelector('a-scene'),
i = 1;
const words = [
    "Virtual Reality, and it's use\n in treating Mental Illness", 
    "I need a second line of words\n to make sure this works.",
    "A 3rd line is always nice."
];

if (scene.hasLoaded) {
    run();
} else {
    scene.addEventListener("loaded", run());
};

function run() {
    alert("ran");
    var text = scene.querySelector("#words");
    text.setAttribute("text", "value", "a");
//     while (i < words.length) {
//         await new Promise(r => setTimeout(r, 5000));
//         console.log(text.getAttribute("text").value);
//         i++;
//     };
};