//test case:
// Navigate with the app url
// navigate login page via home page
// enter credentials and login 
// verify successful login

import { test, expect } from '@playwright/test'
import { TestConfig } from '../test.config'
import { MyAccountPage } from '../pages/MyAccountPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

let config: TestConfig;
let accpage: MyAccountPage;
let homepage: HomePage;
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl); //navigation to the app url
    homepage = new HomePage(page);
    loginPage = new LoginPage(page);
    accpage = new MyAccountPage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000);
    await page.close();

})

test('Login scenario @sanity @regression @master', async ({ page }) => {

       //Go to 'My Account' and click 'Register'
    await homepage.clickMyAccount();
    await homepage.clickLoginLink();

     //enter the vlaid credentials and login

    await loginPage.setEmail(config.username);
    await loginPage.setPassword(config.password);
    await loginPage.clickLogin();

//alternatively
    //await loginPage.login(config.email,config.password)

      //verify successfull
    const isloggin = await accpage.isMyAccountPageExists();
    expect(isloggin).toBeTruthy();

    await page.waitForTimeout(5000)

})



