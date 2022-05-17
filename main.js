AFRAME.registerComponent('hahafunny', {
    tick: function () {
        // `this.el` is the element.
        // `object3D` is the three.js object.
    
        // `rotation` is a three.js Euler using radians. `quaternion` also available.
        //   console.log(this.el.object3D.rotation);
    
        //   `position` is a three.js Vector3.
        //   console.log(this.el.object3D.position);
        this.el.object3D.scale.x = this.el.object3D.scale.x - 0.1
    }
  });

AFRAME.registerComponent('moveOnClick', {
    init: function () {
    var el = this.el;        
    el.addEventListener('click', function () {            
        el.object3D.scale.x = 200
    });        
    }
});
