Template.index.onCreated( () => {
  let template = Template.instance();

  template.wishitems = new ReactiveVar();

  Meteor.call('generateWishlist', 10, (error, result) => {
    template.wishitems.set(result||[]);
  });

});

Template.index.helpers({
  contentReady() {
    return Template.instance().wishitems.get();
  },
  wishitems() {
    return Template.instance().wishitems.get();
  }
});


