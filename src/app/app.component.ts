import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  sidebar:boolean=true;
  sidebarToggle(){
   this.sidebar=!this.sidebar
   //true=false
   //false=true
  }
}
