import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  // templateUrl: './app.component.html',
  template: `
    <app-header></app-header>
    <main>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.css',
  styles: `
  p{
    color: green;
  }
  `,
})
export class AppComponent {
  title = 'demo';
}
