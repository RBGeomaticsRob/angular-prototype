describe('Github Profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'))
  var searchButton = element(by.className('btn'))

  beforeEach(function(){
    browser.get('http://localhost:8080')
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github User Search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('spike01');
    searchButton.click();
    expect(element(by.binding('user.login')).getText()).toEqual('spike01');
  })

    it('finds profiles in a list of profiles', function() {
    searchBox.sendKeys('spike01');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.get(0).getText()).toEqual('spike01');
  })
});
