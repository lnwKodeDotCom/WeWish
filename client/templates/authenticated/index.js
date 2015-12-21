const WISHES_STEP = 3;

Template.index.onCreated( () => {
  let template = Template.instance();
  template.no_of_wishes = new ReactiveVar(WISHES_STEP);

  template.autorun(()=> {
    template.subscribe('wishList', template.no_of_wishes.get());
  });

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
    return template.no_of_wishes.get() < 15;
  }
});

Template.index.events({
  'click .load-more': (event, template) => {
    event.preventDefault();
    template.no_of_wishes.set(template.no_of_wishes.get()+WISHES_STEP);
    $("html, body").animate({scrollTop: $(".load-more").offset().top}, 500);
  }
});


