var camera = document.querySelector('a-entity[camera]').components.camera.camera;

while (true) {
    camera.rotation.x++;
}