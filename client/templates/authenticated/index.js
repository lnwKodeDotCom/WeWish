Template.index.onCreated( () => {
  let template = Template.instance();

  template.state = new ReactiveDict();
  template.state.setDefault({
    contentReady: false,
    wishitems: []
  });

  Meteor.call('generateWishlist', 10, (error, result) => {
    template.state.set('contentReady',true);
    template.state.set('wishitems', result);
  });

});

Template.index.helpers({
  contentReady() {
    return Template.instance().state.get('contentReady');
  },
  wishitems() {
    return Template.instance().state.get('wishitems');
  }
});

Template.index.onDestroyed(()=>{
});

