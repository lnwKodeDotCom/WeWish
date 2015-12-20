
Template.wishlist.onCreated(() => {
  let template = Template.instance();
  Meteor.call('generateWishlist', 10, (error, result) => {
    if (!error) {
      Session.set('wishlist', result);
    }
  });
});

Template.wishlist.helpers({

  wishList() {
    return Session.get('wishlist');
  }

});
