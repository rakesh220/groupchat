
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
    element(by.linkText('3 replies')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div[3]/aadhya-reply-message/div[2]/p')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div[3]/aadhya-reply-message/div[2]/span')).click();
    browser.driver.sleep(10000);
    element(by.linkText('Edit Reply')).click();
   browser.driver.sleep(10000);
   element(by.xpath('//*[@id="sidebar"]/div[2]/div[3]/div[1]/div[3]/aadhya-reply-message/input')).sendKeys('my new message 2');
   browser.driver.sleep(10000);
   var enter = browser.actions().sendKeys(protractor.Key.ENTER);
   enter.perform();
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
   browser.driver.sleep(10000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
   browser.driver.sleep(10000);
    }); 
  });