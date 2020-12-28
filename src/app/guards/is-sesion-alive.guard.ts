import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})

export class IsSesionAliveGuard implements CanActivate {

  constructor(private router: Router, private sessionService: SessionService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.sessionService.user.name === 'usuario') {
      return true;
    } else {
      alert('Debe iniciar sesión para acceder a este sitio');
      this.router.navigateByUrl('/');
      return false;
    }
  }
}