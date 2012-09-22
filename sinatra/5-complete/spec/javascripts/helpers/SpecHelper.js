beforeEach(function() {
  this.addMatchers({

    toHaveSelectedImageAt: function(expectedIndex) {
      var images = this.actual;
      var actualIndex = images.indexOf(images.selectedImage);
      this.actual = actualIndex;
      this.message = function(){
        return "Expected selected image index of " + actualIndex + " to be " + expectedIndex;
      };
      return (actualIndex == expectedIndex);;
    }

  });
});
