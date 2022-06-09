var text = document.querySelector("#maintext"),
i = 1;
const words = [
    "Virtual Reality, and it's use\n in treating Mental Illness", 
    "I need a second line of words\n to make sure this works.",
    "A 3rd line is always nice."
];

while (i < words.length) {
    await new Promise(r => setTimeout(r, 5000));
    alert(text.getAttribute("text").value)
}