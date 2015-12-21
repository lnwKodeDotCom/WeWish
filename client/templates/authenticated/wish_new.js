AutoForm.hooks({
  insertWish: {
    // Called when any submit operation succeeds
    onSuccess: function(formType, result) {
      FlowRouter.go('index');
    },

    // Called when any submit operation fails
    onError: function(formType, error) {},
  }
});
