import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle } from '@angular/common';  
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle, FormsModule],  
  template: `
    <p>Hello, {{ title }}</p>
    <ul>
      <li *ngFor="let item of list">{{item}}</li>
    </ul>
    <button (click)="isLoggedIn =!isLoggedIn">Toggle Login</button>
    <p *ngIf="isLoggedIn">Logged in as {{ userName }}</p>
    <p *ngIf="!isLoggedIn">Not logged in</p>
   <div [ngSwitch]="Farbe">
    <p *ngSwitchCase="'red'">Red</p>
    <p *ngSwitchCase="'blue'">Blue</p>
    <p *ngSwitchDefault>Default</p>
  </div>
  <button (click)="isActive =!isActive">Toggle Active</button>
  <div [ngClass]="{'highlight': isActive, 'error': hasError}">
    <p>This is a test</p>
  </div>
  <p [ngStyle]="{'font-size': fontSize, 'color': color}">Hello, Angular</p>

  <input [(ngModel)]="userName2" placeholder="Enter userName">
  <p>Current User: {{ userName2 }}</p>
  <p ngNonBindable>Hello, Angular</p>
  
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  list = ['Home', 'About', 'Contact'];
  isLoggedIn = true;
  userName = 'Bahattin';
  Farbe= 'red';
  isActive = false;
  hasError = false;
  fontSize = '24px';
  color= 'blue';
  userName2 = '';
}
