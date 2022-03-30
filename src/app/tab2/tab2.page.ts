import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  npm: string;
  nama: string;
  jurusan: string;
  prodi: string;
  kelas: string;

  public POSTData: any;
  public updateSiswa: any;
  constructor(
    private http: HttpClient,
    private toast: ToastController
  ) { }

  submit() {

    if(this.npm!=null && this.nama!=null && this.jurusan!=null && this.prodi!=null && this.kelas!=null){
        this._Postdata();
        console.log(this.npm, this.nama, this.jurusan, this.prodi, this.kelas);
        this.npm="";
        this.nama="";
        this.jurusan = "";
        this.prodi = "";
        this.kelas="";
        alert("Create Data Successfully");
    }else{
        alert("Data harus lengkap !");
    }



  }

  _Postdata() {
    let data: Observable<any>;
    data = this.http.get('http://localhost:8080/codeigniter/index.php/Api/PostData/' + this.npm + '/' + this.nama + '/' + this.jurusan + '/' + this.prodi + '/' + this.kelas + '/' );
    data.subscribe(result => {
      this.POSTData = result;
      console.log(result);
      if (result.status === 'Berhasil') {
        alert("Create Data Successfully");
      }
    });
  }
}