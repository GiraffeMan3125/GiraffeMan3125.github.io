// Old Unworking Code
// while (true) {
//     camXScale = camera.getAttribute('scale');
//     camera.setAttribute('scale', {x: (1 + camXScale)});
// };

AFRAME.registerComponent('scaleGoBrr', {
    tick: function () {
        // `this.el` is the element.
        // `object3D` is the three.js object.
    
        // `rotation` is a three.js Euler using radians. `quaternion` also available.
        //   console.log(this.el.object3D.rotation);
    
        //   `position` is a three.js Vector3.
        //   console.log(this.el.object3D.position);
        this.el.object3D.scale = this.el.object3D.scale - 1
    }
  });