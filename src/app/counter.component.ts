import {Component} from '@angular/core';

@Component({
  selector: 'counter',
  template: `
        <div class="container mt-5">
          <h2 class="counter">
              {{counter}}
          </h2>
          <button class="counter-button" (click)="stepUp()">Click</button>
        </div>
    `,
  styles: [`
        .counter-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
        }
    `]
})

export class CounterComponent {
  public counter: number = 42;
  public stepUp(): void
  {
    this.counter++;
  }
}
