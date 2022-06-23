import { Component, ViewEncapsulation,} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../config-scss/pokebli.scss',
    './app.component.scss'
  ]
})


export class AppComponent {
  title = 'pokedex';

}
