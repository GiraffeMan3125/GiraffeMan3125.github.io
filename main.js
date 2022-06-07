const words = [
    "Virtual Reality, and it's use\n in treating Mental Illness", 
    "I need a second line of words\n to make sure this works.",
    "A 3rd line is always nice."
]
var i = 1;

async function loopychangetextboy() {
    await new Promise(r => setTimeout(r, 5000));
    alert(this.el.getAttribute('text').opacity)
    while (this.el.getAttribute('text').opacity > 0) {
       this.el.setAttribute('text', 'opacity', (this.el.getAttribute('text').opacity - 0.05));
    }
    i++;
    this.el.setAttribute('text', 'value', words[i]);
    while (this.el.getAttribute('text').opacity < 1) {
        this.el.setAttribute('text', 'opacity', (this.el.getAttribute('text').opacity + 0.05));
    }
    if (i < words.length) {
        loopychangetextboy();
    }
}

AFRAME.registerComponent("cets", {
    init: function () {
        loopychangetextboy(e);
    }
});