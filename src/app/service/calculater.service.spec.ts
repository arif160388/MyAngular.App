import { TestBed } from '@angular/core/testing';

import { CalculaterService } from './calculater.service';
import { LoggerService } from './logger.service';

describe('CalculaterService', () => {
 let calService:CalculaterService,
 loggerSpy:any;
 
beforeEach(()=>{
   loggerSpy=jasmine.createSpyObj('LoggerService',['log'])
   TestBed.configureTestingModule({
     providers:[
      CalculaterService,
       { provide : LoggerService, useValue: loggerSpy}
     ]
   });
   calService=TestBed.get(CalculaterService);
});
  it('should be created', () => {
    expect(calService).toBeTruthy();
  });
  it('should add two number', () => {
    let result=calService.add(3,8);
    expect(result).toBe(11);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
  it('should subtract two number', () => {
    let result=calService.subtract(13,8);
    expect(result).toBe(5);
  });
});
