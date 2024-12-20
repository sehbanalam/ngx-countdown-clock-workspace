import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'ngx-countdown-clock',
  template: `
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      rel="stylesheet"
    />
    <div class="countdown-clock">
      <div class="progress-bar" [style.width.%]="progress"></div>
      <div class="time-display">{{ formattedTime }}</div>
      <button class="icon-button play" (click)="start()">
        <i class="fas fa-play"></i>
      </button>
      <button class="icon-button pause" (click)="pause()">
        <i class="fas fa-pause"></i>
      </button>
      <button class="icon-button restart" (click)="reset()">
        <i class="fas fa-redo"></i>
      </button>
    </div>
  `,
  styles: [
    `
      .countdown-clock {
        position: relative;
        border: 1px solid #ccc;
        background-color: #f5f5f5; /* Light grey background */
        border-radius: 12px; /* Rounded corners */
        padding: 16px; /* Padding inside the card */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
        margin: 8px; /* Optional: Fixed width for the card */
        transition:
          transform 0.2s,
          box-shadow 0.2s; /* Smooth hover effect */
      }
      .countdown-clock:hover {
        transform: translateY(-5px); /* Slight lift effect on hover */
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
      }
      .progress-bar {
        height: 5px;
        background-color: #4caf50;
        transition: width 0.1s linear;
      }
      .time-display {
        font-size: 1.5em;
        margin: 10px 0;
      }
      /* Icon button styling */
      .icon-button {
        background-color: #007bff; /* Button color */
        border: none;
        border-radius: 50%;
        color: #fff;
        width: 24px;
        height: 24px;
        justify-content: center;
        align-items: center;
        font-size: 8px;
        margin-right: 4px;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition:
          background-color 0.3s,
          transform 0.2s;
      }

      /* Hover effect */
      .icon-button:hover {
        background-color: #0056b3;
        transform: scale(1.1);
      }

      /* Active button effect */
      .icon-button:active {
        background-color: #003f7f;
        transform: scale(0.95);
      }

      /* Individual button colors (optional customization) */
      .play {
        background-color: #28a745; /* Green */
      }

      .pause {
        background-color: #ffc107; /* Yellow */
      }

      .restart {
        background-color: #dc3545; /* Red */
      }
    `,
  ],
})
export class NgxCountdownClockComponent implements OnInit, OnDestroy {
  @Input() startTime: number = 60; // in seconds
  @Output() countdownComplete = new EventEmitter<void>();

  remainingTime: number = 0;
  formattedTime: string = '';
  progress: number = 100;
  private timerSubscription: Subscription | null = null;

  ngOnInit() {
    this.reset();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    if (this.timerSubscription) return;

    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
        this.updateDisplay();
      } else {
        this.clearTimer();
        this.countdownComplete.emit();
      }
    });
  }

  pause() {
    this.clearTimer();
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.startTime;
    this.updateDisplay();
  }

  private updateDisplay() {
    this.formattedTime = this.formatTime(this.remainingTime);
    this.progress = (this.remainingTime / this.startTime) * 100;
  }

  private clearTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
  }

  private formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }
}
