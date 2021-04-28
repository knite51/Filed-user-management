import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = new BehaviorSubject('');

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      this.url.next(location.path());
    });
  }
}
