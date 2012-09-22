exports.index = function(req, res){
  var imageArray = getImages();
  res.render('index', {images: imageArray});
};

exports.getImages = function(req, res){
  res.send(images);
};

exports.getImageById = function(req, res){
  var id = req.params.id;
  var image;
  res.send(image);
};

exports.createImage = function(req, res){
  var image;
  res.send(image);
};

exports.updateImage = function (req, res){
  var image;
  res.send(image);
};

exports.deleteImage = function(req, res){
  var image;
  res.send(image);
};

// --------------------

function getImages(){
  var imgs = [];
  for (var imgId in images){
    if (images.hasOwnProperty(imgId)){
      imgs.push(images[imgId]);
    }
  }
  return imgs;
}

var images = {};

images[1] = {
  id: 1,
  url: "/images/islands.jpeg",
  name: "Some island",
  description: "Some islands at sunset"
}

images[2] = {
  id: 2,
  url: "/images/mountain.jpeg",
  name: "A mountain",
  description: "A mountain with a grassy hill and tree in front of it"
}

images[3] = {
  id: 3,
  url: "/images/wrench.jpeg",
  name: "A rusty wrench",
  description: "A close up view of a rusty wrence, with great color and texture on it"
}

images[4] = {
  id: 4,
  url: "/images/flower.jpeg",
  name: "A purple flower",
  description: "A purple flower with a water drop hanging off another plant"
}

