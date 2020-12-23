import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlbumService } from './album.service';
import { IAlbum } from './ialbum';

@Injectable({
  providedIn: 'root'
})
export class AlbumsResolverService implements Resolve<IAlbum[]> {

  constructor( private albumSerive: AlbumService ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAlbum[]> | Promise<IAlbum[]> | IAlbum[]{
    return this.albumSerive.getAlbums()
  }
}
