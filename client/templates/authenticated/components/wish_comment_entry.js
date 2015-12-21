AutoForm.hooks({
  newComments: {
    // Called when any submit operation succeeds
    onSuccess: function(formType, result) {},

    // Called when any submit operation fails
    onError: function(formType, error) {
      Bert.alert( error, 'error' );
    },
  }
});
