var camera = document.querySelector('a-entity[camera]').components.camera.camera;

camera.setAttribute('reverseMouseDrag', true);

while (true) {
    camera.getAttribute('scale');
    camera.setAttribute('scale', {x: i});
    i++;
};
