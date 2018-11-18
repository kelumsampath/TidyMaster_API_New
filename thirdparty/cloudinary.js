// apikey 441889556151132
// api secrete e9hIrL_FSwbbQDYVOtYpsK_d0IU
// env cloudinary://441889556151132:e9hIrL_FSwbbQDYVOtYpsK_d0IU@university-of-moratuwa/
// cloudinary.image("sample", {"crop":"fill","gravity":"faces","width":300,"height":200,"format":"jpg"});

const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'university-of-moratuwa', 
    api_key: '441889556151132', 
    api_secret: 'e9hIrL_FSwbbQDYVOtYpsK_d0IU' 
  });

module.exports.defaultuser=(callback)=>{
    const filepath='assets/defualt.jpg'
    cloudinary.uploader.upload(filepath,function(result) {
        //console.log(result);
            var data={
                public_id:result.public_id,
                url:result.url
            }
            callback(data)
    })
}

module.exports.deleteimage=(public_id,callback)=>{
cloudinary.uploader.destroy(public_id, function(result){
    callback(result);
})
}

module.exports.getimageurl=(public_id,callback)=>{
    const img =cloudinary.url(public_id, { secure: true, width: 100, 
        height: 100, crop: 'fill' })
    //console.log(img)
    callback(img);
}