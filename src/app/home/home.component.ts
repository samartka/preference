import { Component, OnInit } from '@angular/core';
import {TabItem} from '../tab-item'
import { ConfigKey } from "../config-key";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userTabItems : TabItem[];
  workTabItems : TabItem[];
  selectedTabItems : TabItem[];
  selectedTabItem : TabItem;

  constructor() {
    this.userTabItems = [
      {name:'Text Editor',group:'Text Editor',pos:"alone",
      keys:[
        {name:"Text Editor 1",description:"Description for Text Editor 1",value:"Value for Text Editor 1"},
        {name:"Text Editor 2",description:"Description for Text Editor 2",value:"Value for Text Editor 2"},
        {name:"Text Editor 3",description:"Description for Text Editor 3",value:"Value for Text Editor 3"},
        {name:"Text Editor 4",description:"Description for Text Editor 4",value:"Value for Text Editor 4"},
        {name:"Text Editor 5",description:"Description for Text Editor 5",value:"Value for Text Editor 5"},
        {name:"Text Editor 6",description:"Description for Text Editor 6",value:"Value for Text Editor 6"},
        {name:"Text Editor 7",description:"Description for Text Editor 7",value:"Value for Text Editor 7"},
        {name:"Text Editor 8",description:"Description for Text Editor 8",value:"Value for Text Editor 8"}
        ]
      },
      {name:'Cursor',group:'Text Editor',pos:"first",
      keys:[
        {name:"Cursor sub 2",description:"Description for Cursor sub 2",value:"Value for  Cursor sub 2"},
        {name:"Cursor sub 2",description:"Description for Cursor sub 2",value:"Value for  Cursor sub 2"},
        {name:"Cursor sub 3",description:"Description for Cursor sub 3",value:"Value for  Cursor sub 3"},
        {name:"Cursor sub 4",description:"Description for Cursor sub 4",value:"Value for  Cursor sub 4"},
        ]
      },
      {name:'Find',group:'Text Editor',pos:"middle",
      keys:[
        {name:"Find sub 2",description:"Description for Find sub 2",value:"Value for  Find sub 2"},
        {name:"Find sub 2",description:"Description for Find sub 2",value:"Value for  Find sub 2"},
        {name:"Find sub 3",description:"Description for Find sub 3",value:"Value for  Find sub 3"},

        ]
      },      
      {name:'Font',group:'Text Editor',pos:"middle",
      keys:[
        {name:"Font sub 2",description:"Description for Font sub 2",value:"Value for  Font sub 2"},
        {name:"Font sub 2",description:"Description for Font sub 2",value:"Value for  Font sub 2"},
        {name:"Font sub 3",description:"Description for Font sub 3",value:"Value for  Font sub 3"},
        {name:"Font sub 4",description:"Description for Font sub 4",value:"Value for  Font sub 4"},
        {name:"Font sub 5",description:"Description for Font sub 5",value:"Value for  Font sub 5"},
        ]
      },
      {name:'Formatting',group:'Text Editor',pos:"middle",
      keys:[
        {name:"Formatting sub 2",description:"Description for Formatting sub 2",value:"Value for  Formatting sub 2"},
        {name:"Formatting sub 2",description:"Description for Formatting sub 2",value:"Value for  Formatting sub 2"},
        ]
      },    
      {name:'Diff Editor',group:'Text Editor',pos:"last",
      keys:[
        {name:"Diff Editor sub 2",description:"Description for Diff Editor sub 2",value:"Value for  Diff Editor sub 2"},
        {name:"Diff Editor sub 2",description:"Description for Diff Editor sub 2",value:"Value for  Diff Editor sub 2"},
        {name:"Diff Editor sub 3",description:"Description for Diff Editor sub 3",value:"Value for  Diff Editor sub 3"},
        {name:"Diff Editor sub 4",description:"Description for Diff Editor sub 4",value:"Value for  Diff Editor sub 4"},
        {name:"Diff Editor sub 5",description:"Description for Diff Editor sub 5",value:"Value for  Diff Editor sub 5"},

        ]
      },        

      {name:'Workbench',group:'Workbench',pos:"alone",
      keys:[
        {name:"Workbench sub 2",description:"Description for Workbench sub 2",value:"Value for  Workbench sub 2"},
        {name:"Workbench sub 2",description:"Description for Workbench sub 2",value:"Value for  Workbench sub 2"},
        {name:"Workbench sub 3",description:"Description for Workbench sub 3",value:"Value for  Workbench sub 3"},
        {name:"Workbench sub 4",description:"Description for Workbench sub 4",value:"Value for  Workbench sub 4"},
        {name:"Workbench sub 5",description:"Description for Workbench sub 5",value:"Value for  Workbench sub 5"},
        {name:"Workbench sub 6",description:"Description for Workbench sub 6",value:"Value for  Workbench sub 6"},
        {name:"Workbench sub 7",description:"Description for Workbench sub 7",value:"Value for  Workbench sub 7"},
        {name:"Workbench sub 8",description:"Description for Workbench sub 8",value:"Value for  Workbench sub 8"}
        ]
      }    
  
    ]
    this.workTabItems = [
      {name:'W1',group:'W1',pos:"alone",
      keys:[
        {name:"W1 1",description:"Description for W1 1",value:"Value for W1 1"},
        {name:"W1 2",description:"Description for W1 2",value:"Value for W1 2"},
        {name:"W1 3",description:"Description for W1 3",value:"Value for W1 3"},
        {name:"W1 4",description:"Description for W1 4",value:"Value for W1 4"},
        {name:"W1 5",description:"Description for W1 5",value:"Value for W1 5"},
        {name:"W1 6",description:"Description for W1 6",value:"Value for W1 6"},
        {name:"W1 7",description:"Description for W1 7",value:"Value for W1 7"},
        {name:"W1 8",description:"Description for W1 8",value:"Value for W1 8"}
        ]
      },
      {name:'W1 sub1',group:'W1',pos:"mid",
      keys:[
        {name:"W1 sub1 1",description:"Description for W1 sub1 1",value:"Value for W1 sub1 1"},
        {name:"W1 sub1 2",description:"Description for W1 sub1 2",value:"Value for W1 sub1 2"},
        {name:"W1 sub1 3",description:"Description for W1 sub1 3",value:"Value for W1 sub1 3"},
        {name:"W1 sub1 4",description:"Description for W1 sub1 4",value:"Value for W1 sub1 4"},
        {name:"W1 sub1 5",description:"Description for W1 sub1 5",value:"Value for W1 sub1 5"},
        {name:"W1 sub1 6",description:"Description for W1 sub1 6",value:"Value for W1 sub1 6"},
        {name:"W1 sub1 7",description:"Description for W1 sub1 7",value:"Value for W1 sub1 7"},
        {name:"W1 sub1 8",description:"Description for W1 sub1 8",value:"Value for W1 sub1 8"}
        ]
      },
      {name:'W2',group:'W2',pos:"alone",
      keys:[
        {name:"W1 1",description:"Description for W1 1",value:"Value for W1 1"},
        {name:"W1 2",description:"Description for W1 2",value:"Value for W1 2"},
        {name:"W1 3",description:"Description for W1 3",value:"Value for W1 3"},
        {name:"W1 4",description:"Description for W1 4",value:"Value for W1 4"},
        {name:"W1 5",description:"Description for W1 5",value:"Value for W1 5"},
        {name:"W1 6",description:"Description for W1 6",value:"Value for W1 6"},
        {name:"W1 7",description:"Description for W1 7",value:"Value for W1 7"},
        {name:"W1 8",description:"Description for W1 8",value:"Value for W1 8"}
        ]
      },
      {name:'W2 sub1',group:'W2',pos:"mid",
      keys:[
        {name:"W2 sub1 1",description:"Description for W2 sub1 1",value:"Value for W2 sub1 1"},
        {name:"W2 sub1 2",description:"Description for W2 sub1 2",value:"Value for W2 sub1 2"},
        {name:"W2 sub1 3",description:"Description for W2 sub1 3",value:"Value for W2 sub1 3"},
        {name:"W2 sub1 4",description:"Description for W2 sub1 4",value:"Value for W2 sub1 4"},
        {name:"W2 sub1 5",description:"Description for W2 sub1 5",value:"Value for W2 sub1 5"},
        {name:"W2 sub1 6",description:"Description for W2 sub1 6",value:"Value for W2 sub1 6"},
        {name:"W2 sub1 7",description:"Description for W2 sub1 7",value:"Value for W2 sub1 7"},
        {name:"W2 sub1 8",description:"Description for W2 sub1 8",value:"Value for W2 sub1 8"}
        ]
      },         
      {name:'W2 sub2',group:'W2',pos:"mid",
      keys:[
        {name:"W2 sub2 1",description:"Description for W2 sub2 1",value:"Value for W2 sub2 1"},
        {name:"W2 sub2 2",description:"Description for W2 sub2 2",value:"Value for W2 sub2 2"},
        {name:"W2 sub2 3",description:"Description for W2 sub2 3",value:"Value for W2 sub2 3"},
        {name:"W2 sub2 4",description:"Description for W2 sub2 4",value:"Value for W2 sub2 4"}
        ]
      }
    ]
    this.selectedTabItems = this.userTabItems;
    this.selectedTabItem = this.userTabItems[0];
  }

  ngOnInit(): void {
  }
  selectedMenu(s:string){
    if (s=="user") {
      this.selectedTabItems = this.userTabItems;
      this.selectedTabItem = this.userTabItems[0];
    } else {
      this.selectedTabItems = this.workTabItems;
      this.selectedTabItem = this.workTabItems[0];

    }
  }
  selectedTabmenu(n:number){
    this.selectedTabItem = this.selectedTabItems[n];
  }
}
