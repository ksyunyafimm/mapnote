import {Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective implements OnChanges{
  @Input()
attribute : object;
  constructor(private el: ElementRef) {
  }

  public ngOnChanges(changes: SimpleChanges) {
    for (let key in this.attribute) {
      this.el.nativeElement.setAttribute(key, this.attribute[key]);
    }
  }

}
