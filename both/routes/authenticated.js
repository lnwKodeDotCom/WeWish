const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated'
});

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});

authenticatedRoutes.route('/wish/:_id', {
  name: 'wishDetail',
  action() {
    BlazeLayout.render( 'default', { yield: 'wishDetail' } );
  }
});

authenticatedRoutes.route('/wish/new', {
  name: 'wishNew',
  action() {
    BlazeLayout.render( 'default', { yield: 'wishNew' } );
  }
});
