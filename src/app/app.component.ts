import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  openPopUp(event: Event) {
    const link = document.querySelector('.contact-btn');
    link?.classList.add('hide');
    const container = document.getElementById('form-container');
    container?.classList.add('container-opened');

  }
}
