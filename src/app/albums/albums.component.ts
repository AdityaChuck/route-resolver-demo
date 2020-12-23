import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlbum } from './ialbum';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: IAlbum[]

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: { albums: IAlbum[] }) => {
      this.albums = data.albums
    })
  }

}
