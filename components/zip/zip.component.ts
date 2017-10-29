import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent{
  @Input('title') title: string;
  isExpended: boolean;
  toggle() {
    this.isExpended = !this.isExpended;
  }
}
