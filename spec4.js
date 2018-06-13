//3) as a group member delete reaction to any message
describe('as a group member delete reaction to any message', function() {
    beforeEach(function () {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
        browser.driver.manage().window().maximize();
    });
    it('Send any file in group chat', function() {
      //browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(40000);
    //element(by.xpath('//*[@id="leftscroll"]/ul[2]/li[1]/a')).click();
    element(by.linkText('testpurpose')).click();
    browser.driver.sleep(30000);
    element(by.css('img[src="/assets/images/smilies/smily3.png"]')).click();
    browser.driver.sleep(10000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
  browser.driver.sleep(10000);
  element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
  browser.driver.sleep(10000);
    });
   
  });