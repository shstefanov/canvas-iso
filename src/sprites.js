class ResourceLoader {


  // Constructor gets array with resources definitions
  constructor(resources){

    this._resources = new Map();

    this.loaded = Promise.all(resources.map((resource)=>{
      return this.loadResource(resource);
    }));

    
  }

  loadResource(resource){
    return new Promise((success, error)=>{
      const img = Object.assign( new Image(), {
        src:     resource.url,
        onerror: error,
        onload:  ()=>{
          const { width, height } = img;
          for (let sprite_name in resource.sprites){
            let spr = this.createSprite(img, resource.sprites[sprite_name]);
            this._resources.set(sprite_name, spr);
          }


          success();
          // console.log(resource.sprites);
        }
      });
    })
  }

  createSprite(img, sprite_data){
    const [ width, height ] = sprite_data.size;
    const [pos_x, pos_y]    = sprite_data.at.map((n)=>n*-1);
    const canvas = document.createElement("canvas");
    Object.assign( canvas, { width, height } );
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, pos_x, pos_y);
    const sprite_image = Object.assign( new Image(), {
      src: canvas.toDataURL()
    });
  }

}