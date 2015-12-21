Template.wishDetail.onCreated(() => {
  let template = Template.instance();

  template.wishId = FlowRouter.getParam('_id');

  template.autorun(() => {
    template.subscribe('wishDetail', template.wishId);
    template.subscribe('comments', template.wishId);
  });
});

Template.wishDetail.helpers({
  contentReady() {
    return Template.instance().subscriptionsReady();
  },
  detail() {
    return Wish.findOne();
  },
  comments() {
    return Comments.find().fetch();
  },
  wishId() {
    return Template.instance().wishId;
  }
});
