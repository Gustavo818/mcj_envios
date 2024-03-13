import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 
@Injectable()
export class Utils {
    
    constructor(
        private router: Router,
        ) {
    }
    
    ira( url:any): void{

        this.router.navigateByUrl(url);
    } 
      
}