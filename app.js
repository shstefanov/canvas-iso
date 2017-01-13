// Skew transform with canvas context:
// http://www.html5canvastutorials.com/advanced/html5-canvas-shear-transform-tutorial/

document.addEventListener("DOMContentLoaded", function(){
  const resources = new ResourceLoader([
    {
      url: "images/tiles.png",
      sprites: {
        "dirt":  { at:  [ 0,   0   ], size: [ 256, 256 ] },
        "sand":  { at:  [ 256, 0   ], size: [ 256, 256 ] },
        "grass": { at:  [ 0,   256 ], size: [ 256, 256 ] },
        "water": { at:  [ 256, 256 ], size: [ 256, 256 ] },
      }
    }
  ]);

  resources.loaded.then(()=>{
    console.log("All Sprites loaded");
  })

});