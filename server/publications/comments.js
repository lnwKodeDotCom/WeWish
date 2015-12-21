Meteor.publish('comments', (wishId) => {
  check(wishId, String)
  return Comments.find({wish_id: wishId});
});
