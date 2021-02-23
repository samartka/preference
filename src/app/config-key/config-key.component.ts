import { Component, OnInit ,Input } from '@angular/core';
import { ConfigKey } from "../config-key";
@Component({
  selector: 'app-config-key',
  templateUrl: './config-key.component.html',
  styleUrls: ['./config-key.component.css']
})
export class ConfigKeyComponent implements OnInit {
  @Input() cKey : ConfigKey;
  
  constructor() { }

  ngOnInit(): void {
  }

}
