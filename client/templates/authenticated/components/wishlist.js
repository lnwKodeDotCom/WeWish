
Template.wishlist.onCreated(() => {
});

Template.wishlist.helpers({

  wishlist() {
    return Session.get('wishlist');
  }

});
