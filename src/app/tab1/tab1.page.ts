import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  public GETSiswa: any;
  public deleteSiswa: any;
  constructor(
    private http: HttpClient
  ) { }

  ionViewWillEnter() {
    this._Getdata();
  }
  
  _Getdata() {
    let data: Observable<any>;
    data = this.http.get('http://localhost:8080/codeigniter/index.php/api/getdata');
    data.subscribe(result => {
      this.GETSiswa = result;
      console.log(result);
    });
  }

  public deleteData(id) {
    let data: Observable<any>;
    data = this.http.get(
      'http://localhost:8080/codeigniter/index.php/api/deletedata/' + id
    );
    data.subscribe((result) => {
      this.deleteSiswa = result;
      console.log(result.status);
      if (result.status === 'Ok') {
        alert('Delete Data Successfully!');
        this.ionViewWillEnter();
      }
    });
  }
}