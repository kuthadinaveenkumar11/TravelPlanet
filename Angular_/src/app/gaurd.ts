import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root',
})
export class agGueard implements CanActivate{
    constructor(){sessionStorage.setItem("name","naveen");
        var name=sessionStorage.getItem("name");}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            return false;
    }
    
}