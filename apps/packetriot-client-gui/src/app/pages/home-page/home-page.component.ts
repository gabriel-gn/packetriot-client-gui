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
    this.http.getConfigFile().subscribe(response => {
      console.log(response);
    }, error => {
      if (error.status == 404) {
        console.log('não encontrou config');
      } else {
        console.log('erro inesperado');
      }
    })
  }

}
