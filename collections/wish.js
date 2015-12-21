Wish = new Meteor.Collection('Wish');

Wish.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'Your wish',
    min: 10
  },
  description: {
    type: String,
    label: 'Detail',
    max: 500,
    optional: true
  },
  owner_id: {
    type: String,
    optional: true
  },
  date_created: {
    type: Date,
    optional: false,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
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
