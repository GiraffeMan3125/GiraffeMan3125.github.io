const words = [
    "Virtual Reality, and it's use\n in treating Mental Illness", 
    "I need a second line of words\n to make sure this works.",
    "A 3rd line is always nice."
]
var i = 1;

async function loopychangetextboy() {
    await new Promise(r => setTimeout(r, 5000));
    alert(this.opacity)
    while (this.opacity > 0) {
        this.opacity = this.opacity - 0.05;
    }
    i++;
    this.value = words[i];
    while (this.opacity < 1) {
        this.opacity = this.opacity + 0.05;
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