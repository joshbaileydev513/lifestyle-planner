// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}