const { Builder, By, until } = require('selenium-webdriver');

async function checkFacebookLive() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to the Facebook page
        await driver.get('https://web.facebook.com/SuKuGod/live_videos');

        // Wait for the page to load
        await driver.wait(until.elementLocated(By.tagName('body')), 10000);

        // Check for the presence of 'data-instancekey'
        let elements = await driver.findElements(By.css('[data-instancekey]'));
        
        if (elements.length > 0) {
            console.log('Live broadcast is active.');
        } else {
            console.log('No live broadcast found.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
    }
}

checkFacebookLive();
