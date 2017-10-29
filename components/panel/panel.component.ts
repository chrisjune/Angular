import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bootstrap-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input('body') body: string;
  constructor() { }

  ngOnInit() {
  }

}
