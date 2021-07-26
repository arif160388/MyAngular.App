import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculaterService {

  constructor(private loggerService:LoggerService) { }

  add(val1:number,val2:number):number{
    this.loggerService.log();
   return val1+val2;
  }
  subtract(val1:number,val2:number):number{
    return val1-val2;
   }
}
