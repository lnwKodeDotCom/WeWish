const MAX_WISHES = 100;

Meteor.publish('wishList', (limit = 5) => {
  check(limit, Number);
  const options = {
    sort: {date_created: -1},
    limit: Math.min(limit, MAX_WISHES)
  };
  return Wish.find({}, options);
});

Meteor.publish('wishDetail', (id) => {
  check(id, String);
  return Wish.find(id);
});
