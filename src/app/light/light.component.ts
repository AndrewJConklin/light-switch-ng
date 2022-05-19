import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {
  @Input() isOn?:boolean

  constructor() { }

  ngOnInit(): void {
  }

}
