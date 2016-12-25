module.exports = {
  '{{this should contain a small title of what the step is doing}}': function (browser) {

  browser
  	.url('http://www.yahoo.com')
  	.waitForElementVisible('. IconNavSearch' , 10000)
  	.setValue('input[name="p"]' , 'economy')
    .click('#uh-search-button')
    .waitForElementVisible('.reg.searchLeftTop' , 10000)
  }
};
