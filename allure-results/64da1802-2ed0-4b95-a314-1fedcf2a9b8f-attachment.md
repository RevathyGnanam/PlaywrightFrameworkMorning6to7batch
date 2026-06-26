# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginDataDriven.spec.js >> Login with csv test data: Valid login @datadriven
- Location: tests\LoginDataDriven.spec.js:53:6

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1  | //test case:
  2  | // Navigate with the app url
  3  | // navigate login page via home page
  4  | // enter credentials and login 
  5  | // verify successful login
  6  | 
  7  | import { test, expect } from '@playwright/test'
  8  | import { MyAccountPage } from '../pages/MyAccountPage';
  9  | import { HomePage } from '../pages/HomePage';
  10 | import { LoginPage } from '../pages/LoginPage';
  11 | import { TestConfig } from '../test.config'
  12 | import { DataProvider } from '../utils/dataProvider'
  13 | 
  14 | //load JSON test data loginData.json
  15 | 
  16 | const jsonPath ="data/logindata.json";
  17 | const jsonTestData = DataProvider.getTestDataUsingJson(jsonPath);
  18 | 
  19 | for(const data of jsonTestData){
  20 | test(`Login with test data: ${data.testName} @datadriven`,async({page})=>{
  21 | 
  22 |      const config =new TestConfig();
  23 |        await page.goto(config.appurl);
  24 | 
  25 |        const  homepage = new Homepage(page);
  26 |        await homepage.clickMyAccount();
  27 |        await homepage.clickLogin();
  28 | 
  29 |        const  loginPage = new LoginPage(page);
  30 |        await loginPage.login(data.email,data.password);
  31 | 
  32 |        if(data.expected.toLowerCase()==='success'){
  33 |           const accpage = new MyAccountPage(page);
  34 |         const isloggin = await accpage.isMyAccountPageExists();
  35 |             expect(isloggin).toBeTruthy();
  36 |        }
  37 |        else{
  38 |         const errormsg =  await loginPage.getloginErrorMessage();
  39 |         expect(errormsg).toContain('Warning: No match')
  40 |        }
  41 | 
  42 | })
  43 | 
  44 | 
  45 | }
  46 | 
  47 | //using csv
  48 | const csvpath = "data/logindata.csv";
  49 | const csvTestData =DataProvider.getTestDataUsingCsv(csvpath);
  50 | 
  51 | 
  52 | for(const data of csvTestData){
  53 | test.only(`Login with csv test data: ${data.testName} @datadriven`,async({page})=>{
  54 | 
  55 |      const config =new TestConfig();
> 56 |        await page.goto(config.appurl);
     |                   ^ Error: page.goto: url: expected string, got undefined
  57 | 
  58 |        const  homepage = new Homepage(page);
  59 |        await homepage.clickMyAccount();
  60 |        await homepage.clickLogin();
  61 | 
  62 |        const  loginPage = new LoginPage(page);
  63 |        await loginPage.login(data.email,data.password);
  64 | 
  65 |        if(data.expected.toLowerCase()==='success'){
  66 |           const accpage = new MyAccountPage(page);
  67 |         const isloggin = await accpage.isMyAccountPageExists();
  68 |             expect(isloggin).toBeTruthy();
  69 |        }
  70 |        else{
  71 |         const errormsg =  await loginPage.getloginErrorMessage();
  72 |         expect(errormsg).toContain('Warning: No match')
  73 |        }
  74 | 
  75 | })
  76 | 
  77 | 
  78 | }
  79 | 
  80 | 
  81 | 
  82 | 
  83 | 
  84 | 
  85 | 
```