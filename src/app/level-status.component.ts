import { Component, Input, HostBinding } from '@angular/core';
import { RabbitMqResponseLevel } from './rabbitmq-response-level.enum';

@Component({
  selector: 'level-status',
  template: `<div class="container">
  <span class="status-block"></span><ng-content></ng-content>
  </div>`,
  styles: [
    `
    
    /* shape of the status block */
    :host .status-block { 
      display: inline-block;
      width: 0.5em;
      height: 0.5em;
      margin-right: 0.5em;
      background-color: black; /* default color */
      border-radius: 100px;
    }
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
      max-width: 80px;
      height: 30px;
      border-radius: 5px;
    }
    /* status block colors */
    :host.low    .status-block { background-color: #155A09; }
    :host.medium .status-block { background-color: #D9D11B; }
    :host.high   .status-block { background-color: #5A0909; }

    /* font colors */
    :host.low     { color: #155A09; }
    :host.medium  { color: #5A5709; }
    :host.high    { color: #5A0909; }

    :host.low .container {background-color: #8CF98A}
    :host.medium .container {background-color: #F9EE8A}
    :host.high .container {background-color: #F98A8A}
  `,
  ],
})
export class LevelStatusComponent {
  /**
   * This is the input that sets the class based on the enum string.
   * It uses HostBinding to class to auto attach the string value
   * to the elements class attribute.
   */
  @Input()
  @HostBinding('class')
  level: RabbitMqResponseLevel;
}
