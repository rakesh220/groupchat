exports.config = {
  framework: 'jasmine',
  
 specs: ['spec3.js'],

  //specs: ['./home/rakesh/Documents/Protractor/userManagement/spec1.js'],
  //specs:['spec34.js'],
   capabilities: {
   'browserName': 'chrome',
   'maxInstances': 1, // will split your test files across 2 browser instances,
   'shardTestFiles': true,
 },

allScriptsTimeout: 1200000,

  getPageTimeout: 1200000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 1200000,
 },

};