import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { TabItem } from "../tab-item";


@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})

export class MenulistComponent implements OnInit {
  @Input() menuItem:TabItem[];
  @Output() onClicked:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  onClick(menuIndex:number){
    this.onClicked.emit(menuIndex);

    // alert(menuIndex);
  }


}
