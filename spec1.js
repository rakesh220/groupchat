//1) Send text message in group chat
describe('User A and all other users in the Group1 should have the same message in chat box.', function() {
    beforeEach(function () {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
        browser.driver.manage().window().maximize();
    });
    it('Send any file in group chat', function() {
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(50000);
    element(by.linkText('testpurpose')).click();
    browser.driver.sleep(20000);
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("hello guys");
    browser.driver.sleep(4000);
    element(by.className('fa fa-telegram')).click();
    browser.driver.sleep(4000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
  browser.driver.sleep(4000);
  element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
  browser.driver.sleep(4000);
    }); 
  });
