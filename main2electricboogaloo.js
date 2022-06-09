var scene = document.querySelector('a-scene'),
i = 1;
const words = [
    "Virtual Reality, and it's use\n in treating Mental Illness", 
    "I need a second line of words\n to make sure this works.",
    "A 3rd line is always nice."
];

if (scene.hasLoaded) {
    main();
} else {
    scene.addEventListener('loaded', main);
};

function main() {
    var text = scene.querySelector("#maintext");
    alert("changing");
    text.setAttribute("text", "value", "a");
//     while (i < words.length) {
//         await new Promise(r => setTimeout(r, 5000));
//         console.log(text.getAttribute("text").value);
//         i++;
//     };
};