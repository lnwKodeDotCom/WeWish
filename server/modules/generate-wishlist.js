const _generate_wishlist = (max) => {
  let wishlist = [];
  for (let i=0; i<max; i++) {
    wishlist.push( {title: faker.lorem.sentence()} );
  }
  Meteor._sleepForMs(2000);
  return wishlist;
};

Modules.server.generateWishlist = _generate_wishlist;

Meteor.methods({
  generateWishlist(max) {
    check(max, Number);
    return Modules.server.generateWishlist(max);
  }
});
