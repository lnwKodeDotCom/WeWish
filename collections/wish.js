Wish = new Meteor.Collection('Wish');

Wish.allow({
  insert: () => true,
  update: () => false,
  remove: () => false
});

Wish.deny({
  insert: () => false,
  update: () => true,
  remove: () => true
});
