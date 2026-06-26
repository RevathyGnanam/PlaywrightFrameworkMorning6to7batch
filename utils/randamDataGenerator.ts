import {faker} from '@faker-js/faker'
import { SSF } from 'xlsx';


export class RandomDataUtil{

static getFirstName(){

return faker.person.firstName();

}


static getLastName(){

return faker.person.lastName();

}

static getFullName(){

  return faker.person.fullName();  

}

static getEmail(){

    return faker.internet.email();
}

static getPhoneNumber(){

    return faker.phone.number();
}

static getUserName():string{
return faker.internet.username();

}
static getPassword():string{
return faker.internet.password();

}

static getRandomCountry():string{
return faker.location.country();

}

static getRandomState():string{
return faker.location.state();

}


static getRandomCity():string{
return faker.location.city();

}


static getRandomPin():string{
return faker.location.zipcode();

}

static getRandomAddress(){
return faker.location.streetAddress()

}

static getrandomPassword(length:number=10){
    return faker.internet.password({length})
}

static getrandomAlphanumericPassword(length:number){
    return faker.string.alphanumeric({length})
}

static getrandomnumericPassword(length:number){
    return faker.string.numeric({length})
}

static getrandomUUId(){
    return faker.string.uuid({})
}






}