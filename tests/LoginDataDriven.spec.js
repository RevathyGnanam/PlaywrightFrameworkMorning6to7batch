//test case:
// Navigate with the app url
// navigate login page via home page
// enter credentials and login 
// verify successful login

import { test, expect } from '@playwright/test'
import { MyAccountPage } from '../pages/MyAccountPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config'
import { DataProvider } from '../utils/dataProvider'

//load JSON test data loginData.json

const jsonPath ="data/logindata.json";
const jsonTestData = DataProvider.getTestDataUsingJson(jsonPath);

for(const data of jsonTestData){
test.only(`Login with test data: ${data.testName} @datadriven`,async({page})=>{

     const config =new TestConfig();
       await page.goto(config.appUrl);

       const  homepage = new Homepage(page);
       await homepage.clickMyAccount();
       await homepage.clickLogin();

       const  loginPage = new LoginPage(page);
       await loginPage.login(data.email,data.password);

       if(data.expected.toLowerCase()==='success'){
          const accpage = new MyAccountPage(page);
        const isloggin = await accpage.isMyAccountPageExists();
            expect(isloggin).toBeTruthy();
       }
       else{
        const errormsg =  await loginPage.getloginErrorMessage();
        expect(errormsg).toContain('Warning: No match')
       }

})


}

//using csv
const csvpath = "data/logindata.csv";
const csvTestData =DataProvider.getTestDataUsingCsv(csvpath);


for(const data of csvTestData){
test(`Login with csv test data: ${data.testName} @datadriven`,async({page})=>{

     const config =new TestConfig();
       await page.goto(config.appUrl);

       const  homepage = new Homepage(page);
       await homepage.clickMyAccount();
       await homepage.clickLogin();

       const  loginPage = new LoginPage(page);
       await loginPage.login(data.email,data.password);

       if(data.expected.toLowerCase()==='success'){
          const accpage = new MyAccountPage(page);
        const isloggin = await accpage.isMyAccountPageExists();
            expect(isloggin).toBeTruthy();
       }
       else{
        const errormsg =  await loginPage.getloginErrorMessage();
        expect(errormsg).toContain('Warning: No match')
       }

})


}






