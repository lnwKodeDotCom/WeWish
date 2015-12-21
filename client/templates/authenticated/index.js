const WISHES_STEP = 5;

Template.index.onCreated( () => {
  let template = Template.instance();
  template.no_of_wishes = new ReactiveVar(WISHES_STEP);
  template.has_more_wishes = new ReactiveVar();

  template.autorun(()=> {
    template.subscribe('wishList', template.no_of_wishes.get());
    template.subscribe('wishCount');
  });

  template.autorun(()=> {
    template.has_more_wishes.set( template.no_of_wishes.get() < Counts.get('wishCount') );
  });


});

Template.index.onRendered( function() {

  let template = this;

  $(window).bind('scroll.loadMore', function() { //detect page scroll

    if ($(window).scrollTop() + $(window).height() == $(document).height())  //user scrolled to bottom of the page?
    {
      if (template.subscriptionsReady() &&
          template.has_more_wishes.get()) {
        template.no_of_wishes.set(template.no_of_wishes.get()+WISHES_STEP);
      }
    }
  });


});

Template.index.onDestroyed( function() {
  $(window).unbind('scroll.loadMore');
});

Template.index.helpers({
  contentReady() {
    var template = Template.instance();
    return template.no_of_wishes.get()>WISHES_STEP || template.subscriptionsReady();
  },
  wishItems() {
    return Wish.find().fetch();
  },
  moreWishes() {
    var template = Template.instance();
    return template.has_more_wishes.get();
  },
});

Template.index.events({
  'click .load-more': (event, template) => {
    event.preventDefault();
    template.no_of_wishes.set(template.no_of_wishes.get()+WISHES_STEP);
    $("html, body").animate({scrollTop: $(".load-more").offset().top}, 500);
  }
});


