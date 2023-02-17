
const { Builder, By, Key, util, Browser, until, WebDriver, Session, Capabilities } = require("selenium-webdriver");
const { Options, Driver, ServiceBuilder } = require('selenium-webdriver/chrome');
const { HttpClient, Executor } = require('selenium-webdriver/http');
const chrome = require("selenium-webdriver/chrome");
// /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222&



async function example(){


    const service = new ServiceBuilder(`/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome`)
       // .build()
        // chrome.setDefaultService(service);

    const chromeOptions = new Options();
    chromeOptions.excludeSwitches('enable-logging');

    console.log("test")

    let driver = new Builder()
        .forBrowser('chrome')
       // .setChromeService(service)
        .setChromeOptions(chromeOptions)
        .build()


    console.log( driver)

     driver.get(`https://www.swagbucks.com/p/login?lang=fr`);
   // await driver.get("https://google.com")
    let mail = driver.findElement(By.name('emailAddress'))
    let password = driver.findElement(By.name('password'))

    mail.sendKeys("longstring");
    password.sendKeys("longstring");
    //  const title = await driver.getTitle();
    //return title;
}

example()