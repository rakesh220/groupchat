
describe('Add Reply to a message in group chat.', function() {
    beforeEach(function () {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
        browser.driver.manage().window().maximize();
    });
    it('Add Reply to a message in group chat.', function() {
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(40000);
    element(by.linkText('testpurpose')).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="default"]/div[1]/ul/li[2]/aadhya-chat-message/div/div/div/div[3]/p')).click();
    browser.driver.sleep(10000);
    element(by.className('fa fa-share')).click();
    browser.driver.sleep(10000);
    element(by.id('message-text')).sendKeys("hello new message");
    browser.driver.sleep(10000);
    var enter = browser.actions().sendKeys(protractor.Key.ENTER);
    enter.perform();
   browser.driver.sleep(10000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
   browser.driver.sleep(10000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
   browser.driver.sleep(10000);
    }); 
  });