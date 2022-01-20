import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../../services/http-api/http-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private http: HttpApiService
  ) { }

  ngOnInit(): void {
  }

  callBackend() {
    this.http.algoae().subscribe(response => {
      console.log(response);
    })
  }

}
