//= requre can.jquery-all

can.Control("CMS.Controllers.DashboardWidgets", {
  defaults : {
    model : null
    , list_view : "/assets/programs_dash/object_list.mustache"
    //, show_view : "/assets/controls/tree.mustache"
    , tooltip_view : "/assets/programs_dash/object_tooltip.mustache"
    , widget_view : "/assets/programs_dash/object_widget.mustache"
    , object_type : null
    , object_category : null //e.g. "governance"
    , object_route : null //e.g. "systems"
    , object_display : null
  }
}, {
  
  init : function() {
    this.fetch_list();
    this.element
    .addClass("widget")
    .addClass(this.options.object_category)
    .attr("id", this.options.object_type + "_list_widget")
    .resize({handles : "s"});
  }

  , fetch_list : function(params) {
    this.options.model.findAll(params, this.proxy('draw_list'));
  }

  , draw_list : function(list) {
    var that = this;
    this.options.list = list;

    can.view(this.options.widget_view, this.options, function(frag) {
      that.element.html(frag);
      CMS.Models.DisplayPrefs.findAll().done(function(d) {
        if(d[0].getCollapsed("programs_dash", that.options.object_type)) 
          that.element.find(".widget-showhide > a").showhide("hide");
      });
      that.element.find('.wysihtml5').wysihtml5({ 
        link: true
        , image: false
        , html: true
        , 'font-styles': false
        , parserRules: wysihtml5ParserRules 
      });
    });
  }

  , ".remove-widget click" : function() {
    var parent = this.element.parent();
    this.element.remove();
    parent.trigger("sortremove");
  }

  , ".widget-showhide click" : function(el, ev) {
    var that = this;
    //animation hasn't completed yet, so collapse state is inverse of whether it's actually collapsed right now.
    var collapse = that.element.find(".content:first").is(":visible");
    CMS.Models.DisplayPrefs.findAll().done(function(d) { 
      d[0].setCollapsed("programs_dash", that.options.object_type, collapse);
    });
  }
});