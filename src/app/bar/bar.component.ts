import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  adresse: string;
  constructor() {
    this.adresse = "0xC9e105db0a56EdD8694457C0b2A0729265Af921D";
    this.adresse= this.adress_cut(this.adresse);
  }

  adress_cut(str : string){
    return str.substr(0,5)+"..."+str.substr(str.length-4, str.length);
  }

  ngOnInit() {
  }

}
