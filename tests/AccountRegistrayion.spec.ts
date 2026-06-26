import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage'
import { RandomDataUtil } from '../utils/randamDataGenerator'
import { TestConfig } from '../test.config'

let homepage: HomePage;
let regpage: RegistrationPage
let configFile: TestConfig

test.beforeEach(async ({ page }) => {

    configFile = new TestConfig();
    await page.goto(configFile.appUrl);
    homepage = new HomePage(page)
    regpage = new RegistrationPage(page)

})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
})

test('Registration functionality @master @sanity @regression', async () => {

    await homepage.clickMyAccount();
    await homepage.clickRegisterLink();

    //fill registration details with random data
    await regpage.setFirstName(RandomDataUtil.getFirstName())
    await regpage.setLastName(RandomDataUtil.getLastName())
    await regpage.setEmail(RandomDataUtil.getEmail())
    await regpage.setTelephone(RandomDataUtil.getPhoneNumber())

    const password = RandomDataUtil.getPassword()

    await regpage.setPassword(password)
    await regpage.setConfirmPassword(password)

    await regpage.setPrivacyPolicy();
    await regpage.clickContinue();

    //validate the confirmation message

    const confirmMsg = await regpage.getConfirmationMsg();
    console.log(confirmMsg)

    expect(confirmMsg).toContain('Your Account Has Been Created!')



})