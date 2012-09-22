$(function(){

  var AddImageView = Backbone.View.extend({
    el: "#add-image-form",

    events: {
      "change #url": "urlChanged",
      "click #save": "saveImage"
    },

    urlChanged: function(e){
      var url = $(e.currentTarget).val();
      $("#preview").attr("src", url);
    },

    saveImage: function(e){
      e.preventDefault();

      var name = $("#name").val();
      var desc = $("#description").val();
      var url = $("#url").val();

      var message = "Name: " + name + "\n";
      message += "Description: " + desc + "\n";
      message += "URL: " + url;

      alert(message);
    }
  });

  new AddImageView();
});

