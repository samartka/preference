import { Component, OnInit, EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {
  
  
  @Output()  
  OnSelected: EventEmitter<string> = new EventEmitter();

  constructor() { 

  }

  ngOnInit(): void {
  }

  select(ch:string){
    this.OnSelected.emit(ch);
  }
}
