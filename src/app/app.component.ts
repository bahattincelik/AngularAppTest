import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<p>hallo</p>
  
  <hr>
  <div style="background-color:aqua;">

<app-home></app-home>

  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Test';
  name = 'Bahattin Celik'
}
