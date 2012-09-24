/* =========================================================
 * Extra scripts for beta designs
 * ========================================================= */

/*
 *= require dashboard
 *= require jquery.cookie
 *= require wysihtml5-0.3.0_rc2
 *= require bootstrap-wysihtml5-0.0.2
 *= require bootstrap-datepicker
 */

jQuery(function ($) {

  //render out templates function
  var renderExternalTmpl = function(item) {
    var file = '/design/templates/' + item.name;
    if ($(item.selector).length > 0) {
      $.when($.get(file)).done(function(tmplData) {
        $(item.selector).append(tmplData)
        //$.templates({ tmpl: tmplData });
        //$(item.selector).append($.render.tmpl(item.data));
      });
    }
  }

  //ACTUALLY renderout templates
  renderExternalTmpl({ name: 'help', selector: '#templates', data: {} });

  renderExternalTmpl({ name: 'confirm', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'comingsoon', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'newasset', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'newentity', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'newfacility', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'newsystem', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'newcontrol', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'auditcycle', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'peopleselector', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'referenceselector', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'newperson', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'newreference', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'newentity', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'newproduct', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'newsection', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'newthreat', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'mappedcontrols', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'mappedcontrolsfull', selector: '#templates', data: {} });
  
  // Selectors 
  renderExternalTmpl({ name: 'selectorPerson', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'selectorReference', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'selectorSystem', selector: '#templates', data: {} });

  // new modals START
  renderExternalTmpl({ name: 'redesignNewProgram', selector: '#templates', data: {} });
  
  renderExternalTmpl({ name: 'redesignNewControlWide', selector: '#templates', data: {} });
  renderExternalTmpl({ name: 'redesignNewSectionWide', selector: '#templates', data: {} });

  // new modals END
  renderExternalTmpl({ name: 'newpersonBasic', selector: '#templates', data: {} });

  renderExternalTmpl({ name: 'newtransaction', selector: '#templates', data: {} });

  renderExternalTmpl({ name: 'auditdefaultscope', selector: '#templates', data: {} });

  renderExternalTmpl({ name: 'sendauditorinvite', selector: '#templates', data: {} });

  renderExternalTmpl({ name: 'neauditscheduleitem', selector: '#templates', data: {} });

  renderExternalTmpl({ name: 'auditmeetingnotice', selector: '#templates', data: {} });


  //<!-- Content templates ->
  renderExternalTmpl({ name: 'examplecontrols', selector: '#Controls', data: {} });
  renderExternalTmpl({ name: 'exampleregulations', selector: '#Regulation', data: {} });
  renderExternalTmpl({ name: 'exampleauditorrequests', selector: '#requests', data: {} });
  renderExternalTmpl({ name: 'examplesysproc', selector: '#sysproc', data: {} });

  renderExternalTmpl({ name: 'examplecombo', selector: '#Combo', data: {} });
  renderExternalTmpl({ name: 'auditstatus', selector: '#auditstatus', data: {} });

  $(document).on("click", "#expand_all", function(event) {
    //$('.row-fluid-slotcontent').show("fast");
    $('.row-fluid-slotcontent').addClass("in");
    $('.expander').addClass("toggleExpanded");
  });

  $(document).on("click", "#shrink_all", function(event) {
    //$('.row-fluid-slotcontent').hide("fast");
    $('.row-fluid-slotcontent').removeClass("in");
    $('.expander').removeClass("toggleExpanded");
  });

  /*Checkbutton in modals widget function*/
  $(document).on("click", ".checkbutton", function(event) {
    $(this).children("i").toggleClass("gcmsicon-blank");
    $(this).children("i").toggleClass("gcmsicon-x-grey");
  });

  /*Toggle widget function*/
  $(document).on("click", ".accordion-toggle", function(event) {
    $(this).children("i").toggleClass("gcmssmallicon-blue-expand");
  });

  /*Toggle slot function*/
  // Handled by rotation of expander icon
  /*$(document).on("click", ".toggle", function(event){
    $(this).children(".expander").toggleClass("toggleExpanded");
  });*/



  $(document).on("click", ".expandAll", function(event) {
    // $("h3.trigger").toggleClass("active").next().slideToggle("fast");
    $(this).children("i").toggleClass("gcmssmallicon-blue-expand");
  });

  //Handle remove buttons
  $(document).on("click", ".removeCircleButton", function(event){
    //alert("here");
    $('#confirmModal').on('hidden', function () {
      $(this).closest('.controlSlot').remove();
    })
    $('#confirmModal').modal('show');
  });


  $('#myModal').on('hidden', function () {
    // do something…
  })

  $(document).on("click", ".greyOut", function(event){
    $(this).closest('.singlecontrolSlot').remove();
  });

  $(".addpersonItem").click(function () {
    $('#modalpeopleList').append("<li class='controlSlot ui-draggable'><div class='arrowcontrols-group'> <div class='controls-type'>Controls-Type</div><div class='controls-subtype'> <a class='dropdown-toggle statustextred' data-toggle='dropdown' href='#'>Select Role</a> <ul class='dropdown-menu dropdown-menusmall'><li>Owner</li><li>User</li></ul> </div>  <div class='controls-subgroup'>Controls-Subgroup</div></div><a class='personItem'><div class='removeCircleButton fltrt'><i class='gcmssmallicon-dash-white'></i></div></a></li>");
  });

  $(".referenceItem").click(function () {
    $('#referenceList').append("<li class='controlSlot'><a href='#'><div class='circle fltrt'><i class='gcmssmallicon-dash-white'></i></div></a><span class='controls-group'>Reference Type</span><br /><span class='controls-subgroup'>Reference Item</span></li>");
  });

  //$(".collapse").collapse();
  $('#quicklinks a:last').tab('show');

  $('#myLock a').click(function (e) {
      e.preventDefault();
      alert("here");
      $('#programinformationLocked').tab('hide');
      $('#programinformationUnlocked').tab('show');
  });

  for (i=0;i<=5;i++) {
    $('#tooltip' + i).tooltip();
  }

  // show/hide widget

  $('body').on('click', '.widget-trigger', function(e) {
    e.preventDefault();
    var $this = $(this),
        $widgetBody = $this.closest(".widget").find(".widget-body"),
        $icon = $this.find("i");

    if( $this.hasClass("active") ) {
      $widgetBody.slideUp("fast");
      $this.removeClass("active");
      $icon
        .removeClass("icon-chevron-down")
        .addClass("icon-chevron-right");
    } else {
      $widgetBody.slideDown("fast");
      $this.addClass("active");
      $icon
        .removeClass("icon-chevron-right")
        .addClass("icon-chevron-down");
    }

  });

  // show/hide list item

  $('body').on('click', '.list-trigger', function(e) {
    e.preventDefault();
    var $this = $(this),
        $listBody = $this.closest(".wlist-title").next(),
        $icon = $this.find("i");

    if( $this.hasClass("active") ) {
      $listBody.slideUp("fast");
      $this.removeClass("active");
      $icon
        .removeClass("icon-chevron-down")
        .addClass("icon-chevron-right");
    } else {
      $listBody.slideDown("fast");
      $this.addClass("active");
      $icon
        .removeClass("icon-chevron-right")
        .addClass("icon-chevron-down");
    }

  });

  // nicer hover

  $('body').on('mouseenter', '.people-list li', function(e) {
    $(this).removeClass('.halfopacity');
    //$(this).find(".additional").slideDown("fast");
  });

  $('body').on('mouseleave', '.people-list li', function(e) {
    $(this).addClass('.halfopacity');
    //$(this).find(".additional").slideUp("fast");
  });

  $('body').on('click', '.people-list li', function(e) {

    if( $(this).find(".additional").hasClass("shown") ) {

    } else {
      //brute force ugly
       $(".additional").slideUp("shown");
       $(".additional").removeClass("shown");
       $(this).find(".additional").slideDown("fast");
       $(this).find(".additional").addClass("shown");
    }
  });


  // add item in target list

  $('body').on('click', '.add-me', function(e) {
    
    e.preventDefault();
    
    $(this).addClass("halfopacity");
    var $this = $(this),
        $icon = $this.find("i"),
        $itemToAdd = $this.closest("li"),
        $name = $itemToAdd.find(".name").html(),
        $company = $itemToAdd.find(".company").html(),        
        $target = $this.closest(".modal-body").find(".target"),
        $unassignedItems = $("#unassignedElements");
        $unassignedValue = parseInt($unassignedItems.html());
    
    $icon
      .removeClass("grcicon-chevron-right")
      .addClass("grcicon-check-green")
    $target
      .prepend('<li class="new-item"> <div class="row-fluid"> <div class="span6"> <span class="company">' + $company + '</span> <span class="name">'+ $name +'</span> </div> <div class="span6 actions">  <a class="widgetbtn pull-right" id="removeMe" href="#"> <i class="icon-minus-sign"></i> </a> <a class="widgetbtn pull-right" href="#"> <i class="gcmsicon-edit-grey"></i> </a> <div class="btn-group inline"> <a class="span7 btn btn-danger btn-mini dropdown-toggle nominheight fltrt" data-toggle="dropdown"> Select Relationship <span class="caret"></span> </a> <ul class="dropdown-menu"> <li> <a href="#" id="makeAccountable"> is Accountable for </a> </li> <li> <a href="#" id="makeResponsible"> is Responsible for </a> </li> </ul> </div></div> </div> <div class="row-fluid additional"> <div class="span4"></div> <div class="span4"> <label>Start Date (Optional)</label> <input class="span12 date" id="datepicker-stopdate-rd" placeholder="MM/DD/YYYY" type="text"> </div> <div class="span4"> <label>Stop Date (Optional)</label> <input class="span12 date" id="datepicker-stopdate-rd" placeholder="MM/DD/YYYY" type="text"> </div> </div> </li>')
      .find("li.new-item").hide().fadeIn('slow').removeClass("new-item");  
    $unassignedItems
      .html($unassignedValue + 1).fadeIn();
  });

  // show filters in modals

  $('body').on('click', '#makeAccountable', function(e) {
    e.preventDefault();
    $(this).closest(".btn-group").find(".dropdown-toggle").html("is Accountable");
    $(this).closest(".btn-group").find(".dropdown-toggle").removeClass('btn-warning');
    $(this).closest(".btn-group").find(".dropdown-toggle").addClass('btn-success');

    $(this).closest(".btn-group").find(".dropdown-toggle").addClass('halfopacity');
    $(this).closest(".btn-group").find(".dropdown-toggle").removeClass('btn-info');
    
  });

  $('body').on('click', '#makeResponsible', function(e) {
    e.preventDefault();
    $(this).closest(".btn-group").find(".dropdown-toggle").html("is Responsible");
    $(this).closest(".btn-group").find(".dropdown-toggle").removeClass('btn-warning');
    $(this).closest(".btn-group").find(".dropdown-toggle").addClass('btn-success');

    $(this).closest(".btn-group").find(".dropdown-toggle").addClass('halfopacity');
    $(this).closest(".btn-group").find(".dropdown-toggle").addClass('btn-info');

  });


  $(document).on("click", "#removeMe", function(event){
    event.preventDefault();
    $(this).closest('li').slideUp("slow", function() { jQuery(this).remove(); });
  });
  
  $('body').on('click', '#showFilters', function(e) {
    e.preventDefault();
    var $this = $(this),
        $filters = $this.closest(".modal-body").find(".filter-group"),
        $searchableLists = $this.closest(".modal-body").find(".filter-block .people-list");
        
    if( $this.hasClass("active") ) {
      $filters.hide();
      $this.removeClass("active");        
      $searchableLists.removeClass("short");
    } else {
      $filters.show();
      $this.addClass("active");
      $searchableLists.addClass("short");
    }      
  });

  $('body').on('click', '#showCategories', function(e) {
    e.preventDefault();
    var $this = $(this),
        $filters = $this.closest(".modal-body").find(".category-group"),
        $searchableLists = $this.closest(".modal-body").find(".filter-block .people-list");
        
    if( $this.hasClass("active") ) {
      $filters.hide();
      $this.removeClass("active");        
      $searchableLists.removeClass("short");
    } else {
      $filters.show();
      $this.addClass("active");
      $searchableLists.addClass("short");
    }      
  });


    $('body').on('click', '#showGRCDirectory', function(e) {
    e.preventDefault();
    var $this = $(this),
        $categoryfilters = $this.closest(".modal-body").find(".category-group"),
        $companyfilters = $this.closest(".modal-body").find(".filter-group"),
        $searchableLists = $this.closest(".modal-body").find(".filter-block .people-list");
        
    //if( $this.hasClass("active") ) {
      //$filters.hide();
      //$this.removeClass("active");        
      //$searchableLists.removeClass("short");
    //} else {
      $categoryfilters.show();
      $companyfilters.hide();
      $this.addClass("active");
      $("#filterButton").html("GRC Directory <span class='caret'></span>"); 
      $searchableLists.removeClass("shortest");
      $searchableLists.addClass("short");
    //}      
  });

$('body').on('click', '#showCompanyDirectory', function(e) {
    e.preventDefault();
    var $this = $(this),
        $categoryfilters = $this.closest(".modal-body").find(".category-group"),
        $companyfilters = $this.closest(".modal-body").find(".filter-group"),
        $searchableLists = $this.closest(".modal-body").find(".filter-block .people-list");
        
    //if( $this.hasClass("active") ) {
      //$filters.hide();
      //$this.removeClass("active");        
      //$searchableLists.removeClass("short");
    //} else {
      $categoryfilters.hide();
      $companyfilters.show();
      $this.addClass("active");
      $("#filterButton").html("Company Directory <span class='caret'></span>"); 
      $searchableLists.addClass("shortest");
      $searchableLists.removeClass("short");
    //}      
  });



  // status js
  var userHasPriviledge = true;
  $('body').on('click', '#actionButton', function(e) {
    e.preventDefault();

    var fullDate = new Date();
    var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
    var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();

    var $this = $(this),
        $alert = $this.closest(".modal").find(".alert"),
        $date = $this.closest(".modal").find("#updatedDate"),
        $alertMessage = $this.closest(".modal").find("#alertMessage"),
        $status = $this.closest(".modal").find("#statusValue"),
        $currentStatus = $this.closest(".modal").find("#statusValue").html();

    if(userHasPriviledge) {

      if ($currentStatus === "Draft") {
        $status
          .html("Waiting for Approval")
          .addClass("statustextred");
        $alertMessage
          .html("New Program has been saved. Waiting on Approval.");
        $alert
          .fadeIn();
        $this
          .html("Approve");
        $date
          .html(currentDate);
      } else if ($currentStatus === "Waiting for Approval") {
        $status
          .html("Approved")
          .removeClass("statustextred");
        $alertMessage
          .html("Program has been approved.");
        $alert
          .fadeIn();
        $this
        .addClass("disabled");
        window.location = "/programs/1";
      }
    }
  });
});

function toggleRisk() {
  //$('.riskWidget').fadeToggle("fast", "linear");
  var interval = 200;
  $('.riskWidget').each(function(i){
    var el = $(this);
    if(el.hasClass('active')){
      $('#grcbutton-risk').addClass('halfopacity').removeClass('active');
      $.cookie('toggle_risk', null);
      el.delay(i*interval).slideUp(interval);
      el.removeClass('active');
    }else{
      $('#grcbutton-risk').removeClass('halfopacity').addClass('active');
      $.cookie('toggle_risk', '1', { expires: 1, path: '/' });
      el.delay(i*interval).slideDown(interval);
      el.addClass('active');
    }
  });

}

function toggleGovernance() {
   var interval = 200;
  $('.govWidget').each(function(i){
    var el = $(this);
    if(el.hasClass('active')){
      $('#grcbutton-governance').addClass('halfopacity').removeClass('active');
      $.cookie('toggle_governance', null);
      el.delay(i*interval).slideUp(interval);
      el.removeClass('active');
    }else{
      $('#grcbutton-governance').removeClass('halfopacity').addClass('active');
      $.cookie('toggle_governance', '1', { expires: 1, path: '/' });
      el.delay(i*interval).slideDown(interval);
      el.addClass('active');
    }
  });

}

jQuery(function($) {
  if ($.cookie('toggle_governance') == '1')
    toggleGovernance();
  else
    $('.govWidget').hide();
  if ($.cookie('toggle_risk') == '1')
    toggleRisk();
  else
    $('.riskWidget').hide();

  $('body').on('click', '#grcbutton-risk', function(e) {
    toggleRisk();
    e.preventDefault();
  });

  $('body').on('click', '#grcbutton-governance', function(e) {
    toggleGovernance();
    e.preventDefault();
  });
});
