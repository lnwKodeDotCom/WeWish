Comments = new Meteor.Collection('Comments');

Comments.schema = new SimpleSchema({

  wish_id: {
    type: String,
    autoform: {
      type: "hidden"
    },
  },
  message: {
    type: String,
    label: 'Message',
    min: 1,
    max: 500,
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
  }
});

Comments.attachSchema(Comments.schema);

Comments.allow({
  insert: () => true,
  update: () => false,
  remove: () => false
});

Comments.deny({
  insert: () => false,
  update: () => true,
  remove: () => true
});
