import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public value = {id: 'start'};

  @HostListener('mouseenter') onMouseIn() {
    this.value = {id: 'color'}
  }

  @HostListener('mouseleave') onMouseOut() {
    this.value = {id: 'end'}
  }
}
