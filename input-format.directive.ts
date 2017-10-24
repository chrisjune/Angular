import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') appInputFormat;
  constructor(private el: ElementRef) {
   }
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.appInputFormat === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    }else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }


}
