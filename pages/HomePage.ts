import{Page,Locator} from '@playwright/test'

export class HomePage{
//locators
private readonly page:Page;
private readonly registerlink:Locator;
private readonly myAccountLink:Locator;
private readonly loginLink:Locator;

//constructor
constructor(page:Page){
    this.page=page;
    this.myAccountLink =page.locator('span:has-text("My Account")');
    this.registerlink =page.locator('a:has-text("Register")')
    this.loginLink =page.locator('a:has-text("Login")')
}

//action methods
//check if page is exist or not
async ishomePageExist(){

    let titile:string = await this.page.title();
if(titile){
    return true;
}
else{
    return false;
}
}

//click my account link

async clickMyAccount(){
await this.myAccountLink.click()
}

//click register link
async clickRegisterLink(){
    try{
await this.registerlink.click()
    }
    catch(error){
console.log(`Exception while clicking 'Register':${error}`)
throw error;
    }

}

//click login link
async clickLoginLink(){
    try{
await this.loginLink.click()
    }
    catch(error){
console.log(`Exception while clicking 'Register':${error}`)
throw error;
    }

}







}
