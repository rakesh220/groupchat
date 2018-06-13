//2) Send code snippet in Group chat.
describe('Send code snippet in Group chat..', function() {
    beforeEach(function () {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
        browser.driver.manage().window().maximize();
    });
    it('Send code snippet in Group chat.', function() {
      //browser.get('https://chatapp.aadhya-analytics.com:4201');
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("rohit");
    element(by.id("Password")).sendKeys("rohitheshwar");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(40000);
    //element(by.xpath('//*[@id="leftscroll"]/ul[2]/li[1]/a')).click();
    element(by.linkText('testpurpose')).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/button/span')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="Messages"]/div/div[3]/div[1]/span[1]/span/ul/li[5]/a')).click();
    browser.driver.sleep(10000);

    element(by.xpath('//*[@id="file-share"]/div/div/div[2]/div[1]/select')).$('[value="email"]').click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="file-share"]/div/div/div[2]/div[2]/quill-editor/div[2]/div[1]')).sendKeys("hello guys");
    browser.driver.sleep(10000);
    element(by.buttonText('Send')).click();
    browser.driver.sleep(10000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
  browser.driver.sleep(10000);
  element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[17]/a')).click();
  browser.driver.sleep(10000);
    });
   
  });
