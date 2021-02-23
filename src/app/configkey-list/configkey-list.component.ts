import { Component, OnInit, Input } from '@angular/core';
import { ConfigKey } from "../config-key";
import { TabItem } from "../tab-item";

@Component({
  selector: 'app-configkey-list',
  templateUrl: './configkey-list.component.html',
  styleUrls: ['./configkey-list.component.css']
})
export class ConfigkeyListComponent implements OnInit {
  @Input() configkeys: ConfigKey[];
  @Input() titem : TabItem;

  constructor() { }

  ngOnInit(): void {
  }

}
