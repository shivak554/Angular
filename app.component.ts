import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-app';
  msg = "";
  constructor(){
    this.msg="R/A/G color on the box derived from EPD status,clickable,opens a pop up window with status of components as different boxes";

  }
  getDetails(event:any){
    if(event != undefined){
      this.msg=event.currentTarget.name;
    }
    return this.msg;
  }
}
