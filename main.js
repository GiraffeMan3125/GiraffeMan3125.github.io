var camera = document.querySelector('#camera')

camera.setAttribute('look-controls', 'reverseMouseDrag', true);

var a = 0

while (true) {
    camXScale = camera.getAttribute('scale');
    camera.setAttribute('scale', {x: (a + camXScale)});
    a++;
};
