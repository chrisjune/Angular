import { Component, OnInit , Input, ElementRef} from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  constructor(private el: ElementRef) {
    let value = this.el.nativeElement.value;
    this.contents = value;
  }
  isOn: boolean;
  @Input('title') title: string;
  contents: string;


  ngOnInit() {
  }

}
