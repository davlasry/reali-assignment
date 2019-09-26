import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  steps: any[];

  ngOnInit() {
    this.steps = [
      { label: 'Name', placeholder: 'Enter your name...' },
      { label: 'Phone', placeholder: 'Enter your phone...' },
      { label: 'Email', placeholder: 'Enter your email...' }
    ];
  }
}
