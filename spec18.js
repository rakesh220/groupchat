//1) send url to any group chat
describe('send url to any group chat', function() {
  beforeEach(function () {
      browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.driver.manage().window().maximize();
  });
  it('Send any file in group chat', function() {
    browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(40000);
  element(by.linkText('testpurpose')).click();
  browser.driver.sleep(30000);
  element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/input')).sendKeys("https://www.MrfTyres.com");
  browser.driver.sleep(10000);
  element(by.className('fa fa-telegram')).click();
  browser.driver.sleep(10000);
 element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(10000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
browser.driver.sleep(10000);
  }); 
});