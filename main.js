AFRAME.registerComponent('a', {
    tick: function () {
        // `this.el` is the element.
        // `object3D` is the three.js object.
    
        // `rotation` is a three.js Euler using radians. `quaternion` also available.
        //   console.log(this.el.object3D.rotation);
    
        //   `position` is a three.js Vector3.
        //   console.log(this.el.object3D.position);
        console.log(this.el.object3D.position);
    }
  });

AFRAME.registerComponent('moveonclick', {
    init: function () {
    var el = this.el;        
    el.addEventListener('click', function () {   
        console.log("test")         
        el.object3D.scale = '5624 943015 648392'
    });        
    }
});
