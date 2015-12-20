Template.index.onCreated( () => {
  let template = Template.instance();

  template.autorun(()=> {
    template.subscribe('wishList');
  });

});

Template.index.helpers({
  contentReady() {
    return Template.instance().subscriptionsReady();
  },
  wishItems() {
    return Wish.find().fetch();
  }
});


