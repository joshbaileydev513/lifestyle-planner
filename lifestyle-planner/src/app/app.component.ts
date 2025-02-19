import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuActive: boolean = false;
  showHero: boolean = true;

  get currentYear(): number {
    return new Date().getFullYear();
  }

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('/motivation') || event.url.includes('/calendar') || event.url.includes('/login')) {
          this.showHero = false;
        } else {
          this.showHero = true;
        }
      }
    });
  }

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }

  closeMenu(): void {
    this.menuActive = false;
  }
}
