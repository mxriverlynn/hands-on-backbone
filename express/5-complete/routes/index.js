exports.index = function(req, res){
  var imageArray = getImages();
  res.render('index', {images: imageArray});
};

exports.getImages = function(req, res){
  res.send(images);
};

exports.getImageById = function(req, res){
  var id = req.params.id;
  var image = getImageById(id);
  res.send(image);
};

exports.createImage = function(req, res){
  var image = createImage(req.body);
  res.send(image);
};

exports.updateImage = function (req, res){
  var image = updateImage(req.body);
  res.send(image);
};

exports.deleteImage = function(req, res){
  var image = deleteImage(req.params.id);
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

function getImageById(id){
  return images[id];
}

function createImage(data){
  var image = data;

  maxId += 1;
  image.id = maxId;

  images[image.id] = image;

  return image;
}

function updateImage(data){
  var image = data;

  images[image.id] = image;

  return image;
}

function deleteImage(id){
  delete images[id];
}

var maxId = 4;
var images = {};

images[1] = {
  id: 1,
  url: "/img/islands.jpg",
  name: "Some island",
  description: "Some islands at sunset"
}

images[2] = {
  id: 2,
  url: "/img/mountain.jpg",
  name: "A mountain",
  description: "A mountain with a grassy hill and tree in front of it"
}

images[3] = {
  id: 3,
  url: "/img/wrench.jpg",
  name: "A rusty wrench",
  description: "A close up view of a rusty wrence, with great color and texture on it"
}

images[4] = {
  id: 4,
  url: "/img/flower.jpg",
  name: "A purple flower",
  description: "A purple flower with a water drop hanging off another plant"
}

