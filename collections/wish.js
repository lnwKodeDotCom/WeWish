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
    optional: true,
    autoform: {
      rows: 3
    }
  },
  owner_id: {
    type: String,
    optional: true,
    autoValue: function() {
      var userId = Meteor.userId() || '';
      if (this.isInsert) {
        return userId;
      } else if (this.isUpsert) {
        return {$setOnInsert: userId};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    autoform: {
      type: "hidden"
    }
  },
  date_created: {
    type: Date,
    optional: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    autoform: {
      omit: true
    }
  },

  no_of_comments: {
    type: Number,
    optional: true,
    autoform: {
      omit: true
    }
  }
});

Wish.attachSchema(Wish.schema);

Wish.allow({
  insert: (userId, document) => userId===Meteor.userId(),
  update: () => false,
  remove: () => false
});

Wish.deny({
  insert: () => false,
  update: () => true,
  remove: () => true
});

Wish.helpers({
  ownerName() {
    let owner = Meteor.users.findOne(this.owner_id);
    let emailName = (x) => x.address.split('@')[0];
    return owner && owner.emails && owner.emails.length>0 && emailName(owner.emails[0]);
  }
});
