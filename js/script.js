


$(function(){
  new (Backbone.Router.extend({
    initialize: function() {
      $(window).resize(this.resize);
    },

    resize: function() {
      $('.carousel').each(function(){
        $(this).find('.item').css('height', $(this).width() * 3/4)
        .css('width', $(this).width())
        .css('line-height', $(this).height() + 'px');
      });
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
      this.resize();
    }
  }))();

  Backbone.history.start();

});