import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang';
}

export class EventBindingDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onShow() {
    alert('Show button clicked!');
  }