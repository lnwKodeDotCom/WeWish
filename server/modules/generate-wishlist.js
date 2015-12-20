const _generate_wishlist = (max) => {
  let wishlist = [];
  for (let i=0; i<max; i++) {
    wishlist.push(faker.lorem.sentence());
  }
  return wishlist;
};

Modules.server.generateWishlist = _generate_wishlist;

Meteor.methods({
  generateWishlist(max) {
    check(max, Number);
    return Modules.server.generateWishlist(max);
  }
});
