Template.wishItem.helpers({
  dateOfWish() {
    var data = Template.instance().data;
    return moment().format('DD.MM.YYYY');
  }
});
