 $(function(){
  new (Backbone.Router.extend({
    initialize: function() {
    },

    show: function(tab) {
      $('a[href="#' + tab + '"]').tab('show');
    },

    routes: {
      "*action": "default",
    },

    default: function(action) {
      if(action === '')
        this.show('home');
      else
        this.show(action);
    }
  }))();

  Backbone.history.start();

});