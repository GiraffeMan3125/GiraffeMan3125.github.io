function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
  

AFRAME.registerComponent('cets', {
    play: function () {
         while (True) {
            this.el.object3D.position.x += 1
            sleep(500)
         }

    }
});