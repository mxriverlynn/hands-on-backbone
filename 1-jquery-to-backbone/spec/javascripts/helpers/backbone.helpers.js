beforeEach(function(){
  this.addMatchers({

    toHaveAttribute: function(attr, expectedValue){
      var model = this.actual;
      var actualValue = model.get(attr);

      this.message = function(){
        return "Expected backbone model to have attribute '" + attr + "' with value of '" + expectedValue + "', but found value of '" + actualValue + "'";
      }

      this.actual = actualValue;
      return (actualValue == expectedValue);
    }

  });
});

Backbone.Model.prototype.callSaveCallback = function(name, response){
  var saveOptions = this.save.argsForCall[0][1];
  var callback = saveOptions[name];
  callback.call(this, this.image, response);
}

Backbone.Model.prototype.callDestroyCallback = function(name, response){
  var destroyOptions = this.destroy.argsForCall[0][0];
  var callback = destroyOptions[name];
  callback.call(this, this.image, response);
}

Backbone.View.prototype.changeVal = function(selector, value){
  var el = this.$(selector);
  el.val(value);
  el.trigger("change");
}

Backbone.View.prototype.clickEl = function(selector){
  var el = this.$(selector);
  el.trigger("click");
}
