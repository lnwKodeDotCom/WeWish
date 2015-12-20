Meteor.publish('wishlist', function() {
  return Wish.find();
});
