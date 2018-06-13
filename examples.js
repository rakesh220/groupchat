//1) Send text message in group chat
describe('User A and all other users in the Group1 should have the same message in chat box.', function() {
    beforeEach(function () {
        browser.get('https://chatapp.aadhya-analytics.com:4201');
        browser.driver.manage().window().maximize();
    });
    it('Send any file in group chat', function() {
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("raheem");
    element(by.id("Password")).sendKeys("raheem");
   element(by.buttonText("Sign In")).click();
    browser.driver.sleep(40000);
   // element(by.xpath('//*[@id="leftscroll"]')).click();
   // browser.driver.sleep(4000);
   // browser.actions().mouseMove(element(by.xpath('//*[@id="leftscroll"]')), {
        //x: 260,
       // y: 700
    //}).click().perform();

    var action = element(by.xpath('//*[@id="leftscroll"]'));
    browser.actions()
      .mouseMove( {x: 80, y: 45})
      .mouseDown()
      .mouseMove({x: 0, y: 25})
      .perform();



  // browser.actions().mouseMove(element(by.xpath('//*by
    //var viewport = element(by.xpath('//*[@id="leftscroll"]'));
 //browser.executeScript("$(arguments[0]).scrollLeft(arguments[0].scrollLeft + 20)",viewport.getWebElement())
   //dvr.executeScript('window.scrollTo(94,188);').then(function() {
      //element(by.xpath('//*[@id="leftscroll"]')).click();
     // browser.actions().
      //element(by.xpath('//*[@id="leftscroll"]')).click();
   // mouseMove(by.xpath('//*[@id="leftscroll"]')).
    //mouseMove({x: 50, y: 0}).
//doubleClick().
//perform();
     // var lastElement = element(by.xpath('//*[@id="leftscroll"]'));
//browser.executeScript('arguments[0].scrollIntoView()', lastElement.getWebElement());
      browser.driver.sleep(30000);


    }); 
  });