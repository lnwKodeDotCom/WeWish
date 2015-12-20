Meteor.publish('wishlist', function() {
  return Wish.find();
});

Meteor.publish('wishDetail', (id) => {
  check(id, String);
  return Wish.find(id);
});
