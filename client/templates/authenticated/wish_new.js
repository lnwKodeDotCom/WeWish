AutoForm.hooks({
  insertWish: {
    // Called when any submit operation succeeds
    onSuccess: function(formType, result) {
      FlowRouter.go('index');
      Bert.alert( 'New Wish added.', 'success' );
    },

    // Called when any submit operation fails
    onError: function(formType, error) {
      Bert.alert( error, 'error' );
    },
  }
});
