import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @Input() isOn!: boolean

  @Output() lightSwitched = new EventEmitter<boolean>();

  switchIt(){
    if(this.isOn === true){
    this.lightSwitched.emit(false)
    } else{
      this.lightSwitched.emit(true)
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
