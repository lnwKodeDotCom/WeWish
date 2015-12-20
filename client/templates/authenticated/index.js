Template.index.onCreated( () => {
  let template = Template.instance();
  Meteor.call('generateWishlist', 10, (error, result) => {
    if (!error) {
      Session.set('wishlist', result);
    }
  });
});

Template.index.helpers({
  contentReady() {
    return !!Session.get('wishlist');
  }
});

Template.index.onDestroyed(()=>{
  Session.set('wishlist','');
});

