import {Component} from '@angular/core';
import {ThemeService} from '@moneta/moneta-web-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public themeService: ThemeService) {}
}
