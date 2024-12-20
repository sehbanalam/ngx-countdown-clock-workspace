# ngx-countdown-clock

`ngx-countdown-clock` is an Angular library for creating a customizable countdown timer with a progress bar and callback functionality. This component is ideal for e-commerce deals, quizzes, or any application requiring a countdown timer.

## Features

- Customizable time format.
- Ability to start, pause, and reset the timer.
- Emits an event when the countdown ends.
- Displays a progress bar for visual feedback.
- Compatible with Angular 10 to the latest version.

---

## Installation

Install the library via npm:

```bash
npm install ngx-countdown-clock
```

---

## Usage

### Import the Module

Add `NgxCountdownClockModule` to your application's module:

```typescript
import { NgxCountdownClockModule } from 'ngx-countdown-clock';

@NgModule({
  declarations: [...],
  imports: [NgxCountdownClockModule],
})
export class AppModule {}
```

---

### Basic Usage

Add the `ngx-countdown-clock` component to your template:

```html
<ngx-countdown-clock [startTime]="60" (countdownComplete)="onCountdownEnd()"></ngx-countdown-clock>
```

In your component class:

```typescript
export class AppComponent {
  onCountdownEnd(): void {
    console.log('Countdown completed!');
  }
}
```

---

### Customizing the Timer

#### Setting the Countdown Start Time

Specify the start time in seconds using the `startTime` input:

```html
<ngx-countdown-clock [startTime]="120"></ngx-countdown-clock>
```

#### Handling Countdown Completion

Use the `countdownComplete` output to execute actions when the timer reaches zero:

```html
<ngx-countdown-clock [startTime]="90" (countdownComplete)="handleCompletion()"></ngx-countdown-clock>
```

```typescript
handleCompletion(): void {
  alert('Time is up!');
}
```

#### Adding Start, Pause, and Reset Functionality

The component provides built-in methods to start, pause, and reset the timer:

```html
<ngx-countdown-clock #countdown [startTime]="120"></ngx-countdown-clock>
<button (click)="countdown.start()">Start</button>
<button (click)="countdown.pause()">Pause</button>
<button (click)="countdown.reset()">Reset</button>
```

#### Customizing the Time Format

By default, the timer displays time in `mm:ss` format. To customize this, modify the `formatTime` method in your component:

```typescript
private formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes} minutes and ${secs} seconds`;
}
```

---

## Styling

The component includes basic styles for the timer and progress bar. You can override these styles in your global or component-specific CSS.

Example:

```css
ngx-countdown-clock .progress-bar {
  background-color: #ff5733;
}

ngx-countdown-clock .time-display {
  font-size: 2em;
  color: #333;
}
```

---

## API Reference

### Inputs

| Input       | Type   | Description                                   |
|-------------|--------|-----------------------------------------------|
| `startTime` | number | Initial countdown time in seconds. Default: 60 |

### Outputs

| Output             | Type     | Description                               |
|--------------------|----------|-------------------------------------------|
| `countdownComplete` | `EventEmitter<void>` | Emits when the countdown reaches zero. |

### Methods

| Method  | Description             |
|---------|-------------------------|
| `start()` | Starts the countdown.   |
| `pause()` | Pauses the countdown.   |
| `reset()` | Resets the countdown.   |

---

## Compatibility

This library is compatible with Angular 10 and above.

---

## License

MIT

---

## Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request on [GitHub](https://github.com/your-repository-link).
