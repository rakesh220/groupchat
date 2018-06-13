//1) notifications
describe('notification shown.', function() {
    beforeEach(function () {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
        browser.driver.manage().window().maximize();
    });
    it('Send any file in group chat', function() {
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("raheem");
    element(by.id("Password")).sendKeys("raheem");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);

     //element(by.xpath('//*[@id="default"]/div[1]/ul/li[16]/aadhya-chat-message/div/div/div/div/p')).click();
     browser.actions().mouseMove(element(by.id('leftscroll'))).perform();
     browser.driver.sleep(10000);
       var value = browser.executeScript("return $('.col-md-3.col-lg-2.leftBar.scrollbar.hidden-sm.hidden-xs').scrollTop(1000);");
browser.driver.sleep(10000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
  browser.driver.sleep(10000);
  element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
  browser.driver.sleep(10000);
    }); 
  });