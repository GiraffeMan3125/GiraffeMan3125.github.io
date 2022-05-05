var camera = document.querySelector('a-entity[camera]').components.camera.camera;

camera.setAttribute('reverseMouseDrag', true)

while (true) {
    camera.getAttribute('rotation');
    camera.setAttribute('rotation', {x: i});
    i++;
}