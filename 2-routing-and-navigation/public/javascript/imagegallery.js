var ImageGallery = {};

ImageGallery.Image = Backbone.Model.extend({
});

ImageGallery.ImageCollection = Backbone.Collection.extend({
  model: ImageGallery.Image
});

ImageGallery.AddImageView = Backbone.View.extend({
  id: "add-image-form",
  template: "#add-image-template",

  events: {
    "change #name": "nameChanged",
    "change #description": "descriptionChanged",
    "change #url": "urlChanged",
    "click #save": "saveImage"
  },

  nameChanged: function(e){
    var value = $(e.currentTarget).val();
    this.model.set({name: value});
  },

  descriptionChanged: function(e){
    var value = $(e.currentTarget).val();
    this.model.set({description: value});
  },

  urlChanged: function(e){
    var value = $(e.currentTarget).val();
    this.model.set({url: value});
    this.$("#preview").attr("src", value);
  },

  saveImage: function(e){
    e.preventDefault();

    var name = this.model.get("name");
    var desc = this.model.get("description");
    var url = this.model.get("url");

    var message = "Name: " + name + "\n";
    message += "Description: " + desc + "\n";
    message += "URL: " + url;

    this.collection.add(this.model);
    alert(message);
  },

  render: function(){
    var html = $(this.template).tmpl();
    $(this.el).html(html);
  }
});

ImageGallery.ImageListView = Backbone.View.extend({
  tagName: "ul",
  template: "#image-preview-template",

  initialize: function(){
    this.collection.bind("add", this.imageAdded, this);
  },

  imageAdded: function(image){
    var html = $(this.template).tmpl(image.toJSON());
    $(this.el).prepend(html);
  }
});

$(function(){
  var images = new ImageGallery.ImageCollection();

  var addImage = function(){
    var image = new ImageGallery.Image();
    var addImageView = new ImageGallery.AddImageView({
      model: image,
      collection: images
    });
    addImageView.render();

    $("#main").html(addImageView.el);
  }

  addImage();
  images.bind("add", addImage, this);

  var imageListView = new ImageGallery.ImageListView({
    collection: images
  });

  $("#image-list").html(imageListView.el);
});
