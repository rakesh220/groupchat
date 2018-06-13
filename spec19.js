//1) notifications
describe('notification shown.', function() {
    beforeEach(function () {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
        browser.driver.manage().window().maximize();
    });
    it('Send any file in group chat', function() {
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.linkText('testpurpose')).click();
    browser.driver.sleep(30000);
     //element(by.xpath('//*[@id="default"]/div[1]/ul/li[16]/aadhya-chat-message/div/div/div/div/p')).click();
     browser.actions().mouseMove(element(by.id('default'))).perform();
     browser.driver.sleep(10000);
       var value = browser.executeScript("return $('.midContent.scrollbar').scrollTop(1000);");
browser.driver.sleep(10000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
  browser.driver.sleep(10000);
  element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
  browser.driver.sleep(10000);
    }); 
  });