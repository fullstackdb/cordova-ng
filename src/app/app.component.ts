import { Component } from '@angular/core';
import { IbeaconsService } from './ibeacons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [IbeaconsService]
})
export class AppComponent {
  title = 'app works!';
  device: any = 'try';

  constructor(private ibeaconsService: IbeaconsService) {
    this.device = cordova.plugins || { message: 'no cordova' };
    this.ibeaconsService.run();
  }
}
