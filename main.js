// WHY WONT MY CODE WORK AAAAA

const words = [
    "Virtual Reality, and it's use\n in treating Mental Illness", 
    "I need a second line of words\n to make sure this works.",
    "A 3rd line is always nice."
]
var i = 1;                  //  set your counter to 1

function loopychangetextboy() {
  setTimeout(function() {
    console.log("test");
    while (this.opa > 0) {
        this.opacity - 0.05;
    }
    i++;
    if (i < words.length) {
        loopychangetextboy();
    }
  }, 500)
}

loopychangetextboy();

AFRAME.registerComponent("cets", {
    init: function () {
        while (True) {
            loopychangetextboy();
        }
    }
});