import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxCountdownClockModule } from 'ngx-countdown-clock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxCountdownClockModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo';
  onCountdownEnd(): void {
    console.log('Countdown completed!');
  }
}
