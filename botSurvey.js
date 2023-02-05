
//import "./addRequire.js";
/*

const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function example(){

    var searchString = "Automation testing with Selenium";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    //To fetch http://google.com from the browser with our code.
    await driver.get("http://google.com");

    //To send a search query by passing the value in searchString.
    await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);

    //Verify the page title and print it
    var title = await driver.getTitle();
    console.log('Title is:',title);

    //It is always a safe practice to quit the browser after execution
    await driver.quit();

}






var browser = require('../browser');
var keys = require('selenium-webdriver').Key;
var until = require('selenium-webdriver').until;
var assert = require('chai').assert;
require('chai').should();

// Use implicit timeouts
const ELEMENT_TIMEOUT = 6000;
const PAGE_TIMEOUT = 10000;

describe('Google.com shopping test', function() {
    // This test should never exceed 25 seconds.
    this.timeout(25000);

    beforeEach(function() {
        this.browser = browser.getLocalBrowser();
    })

    it('should display redbull shopping results', function(done) {
    	var self = this;

        this.browser.get('http://www.google.com/')
            .then(function() {
                return self.browser
                    .wait(
                    	until.elementLocated({ xpath: '//*[@id="lst-ib"]' }),
                        ELEMENT_TIMEOUT
                    )
            })
            .then(function(element) {
            	element.sendKeys('redbull')
				element.sendKeys(keys.ENTER)

				return self.browser
						.wait(
							until.elementLocated({xpath: '//*[@class="q qs"][text()="Shopping"]'}),
							ELEMENT_TIMEOUT
						)
            })
            .then(function(element) {
            	return element.click()
            })
            .then(function(){
            	return self.browser
            			.wait(
            				until.elementLocated({xpath: '//*[@id="res"]//*[@class="psli"][1]//h3//a'}),
            				ELEMENT_TIMEOUT
        				)
            })
            .then(function(element) {
            	return self.browser
            			.wait(
            				until.elementIsVisible(element),
            				ELEMENT_TIMEOUT
        				)
            })
            .then(function(element) {
            	return element.getText()
            })
            .then(function(text) {
            	text.should.contain('Red Bull Energy Drink');
            	done();
            })
    })

    afterEach(function(done) {
        this.browser.quit().then(done);
    })
})









*/


let surveyButton = document.getElementById('surveyButton')

surveyButton.addEventListener('click', async() => {
    console.log("click")
  // await example()
})

