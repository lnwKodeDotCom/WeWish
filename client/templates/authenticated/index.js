Template.index.onCreated( () => {
  let template = Template.instance();

  template.autorun(()=> {
    template.subscribe('wishlist');
  });

});

Template.index.helpers({
  contentReady() {
    return Template.instance().subscriptionsReady();
  },
  wishitems() {
    return Wish.find().fetch();
  }
});


