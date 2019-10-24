import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Part } from '../parts/part.interface';
import { PartService } from '../parts/part.service';

@Injectable()
export class PartDetailResolver implements Resolve<Part> {
  constructor(private partService: PartService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Part> {
    const id = route.paramMap.get('partId');

    return this.partService.getPart(id).pipe(
      take(1),
      map(part => {
        if (part) {
          return part;
        } else {
          this.router.navigate(['/parts']);
          return null;
        }
      })
    );
  }
}
