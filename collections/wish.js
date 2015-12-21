Wish = new Meteor.Collection('Wish');

Wish.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'Your wish',
    min: 20
  }
});

Wish.attachSchema(Wish.schema);

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
