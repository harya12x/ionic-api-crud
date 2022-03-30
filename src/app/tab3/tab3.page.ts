import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  id: any;
  npm: string;
  nama: string;
  jurusan: string;
  prodi: string;
  kelas: string;

  public getSiswa: any;
  public updateSiswa: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe((param: any) => {
      this.npm = param.npm;
      this.getDataWhere(this.npm);
    });
  }

  getDataWhere(npm) {
    let data: Observable<any>;
    data = this.http.get(
      'http://localhost:8080/codeigniter/index.php/Api/getdatawhereid/' + npm
    );
    data.subscribe((result) => {
      this.getSiswa = result;
      this.npm = this.getSiswa[0].npm;
      this.nama = this.getSiswa[0].nama;
      this.jurusan = this.getSiswa[0].jurusan;
      this.prodi = this.getSiswa[0].prodi;
      this.kelas = this.getSiswa[0].kelas;
    });
  }

  submit() {

    if(this.npm!=null && this.nama!=null && this.jurusan!=null && this.prodi!=null && this.kelas!=null){
        this.updateData(this.npm);
        console.log(this.npm, this.nama, this.jurusan, this.prodi, this.kelas);
        this.npm="";
        this.nama="";
        this.jurusan = "";
        this.prodi = "";
        this.kelas="";
        alert("Update Data Successfully");
    }else{
        alert("Data harus lengkap !");
    }



  }
  updateData(npm) {
    let data: Observable<any>;
    data = this.http.get('http://localhost:8080/codeigniter/index.php/Api/PutData/' + this.npm + '/' + this.nama + '/' + this.jurusan + '/' + this.prodi + '/' + this.kelas + '/' );
    data.subscribe((result) => {
      this.updateSiswa = result;
      console.log(result);
      if (result.status === 'Berhasil') {
        alert("Update Data Successfully");
      }
    });
  }
  
    

}
