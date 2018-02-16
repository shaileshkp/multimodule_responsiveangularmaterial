import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isDrawerOpen = false;
  onDrawerChange(drawerStatus: boolean){
    this.isDrawerOpen = drawerStatus;
  }
}
