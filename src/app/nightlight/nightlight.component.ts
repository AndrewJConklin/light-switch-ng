import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nightlight',
  templateUrl: './nightlight.component.html',
  styleUrls: ['./nightlight.component.css']
})
export class NightlightComponent implements OnInit {
  isOn: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  switchIt(){
    if(this.isOn === true){
      this.isOn = false
    } else {
      this.isOn = true
    }
  }

}
