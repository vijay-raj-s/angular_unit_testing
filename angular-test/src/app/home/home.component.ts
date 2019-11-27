import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private FixtureApi: ApiService) { }

  ngOnInit() {
    this.FixtureApi.getFixtures().subscribe(response => {
      console.log('Service response- ----------------------------');
      console.log(response);
      debugger;
    })
  }

}
