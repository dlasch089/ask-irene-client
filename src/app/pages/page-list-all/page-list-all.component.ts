import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';


import { SpotService } from '../../services/spot.service';


@Component({
  selector: 'app-page-list-all',
  templateUrl: './page-list-all.component.html',
  styleUrls: ['./page-list-all.component.css']
})
export class PageListAllComponent implements OnInit {

  spots = [];

  constructor(private spotService: SpotService) { }

  ngOnInit() {
    this.spotService.getAllSpots()
      .subscribe((data) => this.spots = data);
  }

}
