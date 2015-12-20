
var wishItems = [
  { title: 'My wish list should be here.' },
  { title: 'My wish list should be here.' },
  { title: 'My wish list should be here.' },
];

Template.wishlist.helpers({

  wishList() {
    return wishItems;
  }

});
