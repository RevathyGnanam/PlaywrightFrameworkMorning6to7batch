import fs from 'fs';
import {parse} from 'csv-parse/sync' 
import { json } from 'stream/consumers';

export class DataProvider{

    static getTestDataUsingJson(filepath:string){
        let data:any =JSON.parse(fs.readFileSync(filepath,'utf8'))
return data;


    }

     static getTestDataUsingCsv(filepath:string){
        let data:any =parse(fs.readFileSync(filepath),{columns:true,skip_empty_lines:true})
return data;


    }



}