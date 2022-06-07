// WHY WONT MY CODE WORK AAAAA

const words = [
    "Virtual Reality, and it's use\n in treating Mental Illness", 
    "I need a second line of words\n to make sure this works.",
    "A 3rd line is always nice."
]
var i = 1;                  //  set your counter to 1

async function loopychangetextboy() {
    await new Promise(r => setTimeout(r, 5000));
    alert("test")
    while (this.text.opacity > 0) {
        this.text.opacity = this.text.opacity - 0.05;
    }
    i++;
    this.value = words[i];
    while (this.text.opacity < 1) {
        this.text.opacity = this.text.opacity + 0.05;
    }
    if (i < words.length) {
        loopychangetextboy();
    }
}

AFRAME.registerComponent("cets", {
    init: function () {
        loopychangetextboy();
    }
});