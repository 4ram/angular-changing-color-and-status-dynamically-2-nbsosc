import { Component, OnInit } from '@angular/core';
import { RabbitMqResponseLevel } from './rabbitmq-response-level.enum';
import { of, from, Subscription } from 'rxjs'
import { delay, concatMap } from 'rxjs/operators';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  level: RabbitMqResponseLevel;
  subscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.subscription = this.simulateRabbitMq.subscribe(
      (resp) => {
        this.level = resp.Content.level as RabbitMqResponseLevel; // cast the string to our enum.
      }
    )
  }

  /**
   * returns an observable that we can subscribe to for this demos purpose.
   */
  private get simulateRabbitMq() {
    return from([
      {
        "Source": "",
        "Type": "",
        "Timestamp": "2019-07-11T06:00:00.000Z",
        "Content": {
          "level": 'medium' // assuming medium is a string.
        }
      },
      {
        "Source": "",
        "Type": "",
        "Timestamp": "2019-07-11T06:00:00.000Z",
        "Content": {
          "level": 'low' // assuming medium is a string.
        }
      },
      {
        "Source": "",
        "Type": "",
        "Timestamp": "2019-07-11T06:00:00.000Z",
        "Content": {
          "level": 'high' // assuming medium is a string.
        }
      },
    ]).pipe(
      // simulate 1 second delay between each simulated RabbitMq response
      concatMap(response => of(response).pipe(delay(1000))),
    );
  }

}
