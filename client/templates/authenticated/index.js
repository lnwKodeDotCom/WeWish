Template.index.onCreated( () => {
  Template.instance().subscribe( 'template' );
});

var wishItems = [
  { title: 'My wish list should be here.' },
  { title: 'My wish list should be here.' },
  { title: 'My wish list should be here.' },
];

Template.index.helpers({

  wishList() {
    return wishItems;
  }

});
