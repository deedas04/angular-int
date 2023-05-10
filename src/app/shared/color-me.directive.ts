import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorMe]',
})
export class ColorMeDirective {
  @Input() value: number;
  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    console.log(this.value);
    this.renderer.setStyle(
      this.elem.nativeElement,
      'color',
      ['red', 'blue', 'black', 'green', 'orange'][this.value]
    );
  }
  ngOnChanges() {
    console.log(this.value);
    this.renderer.setStyle(
      this.elem.nativeElement,
      'color',
      ['red', 'blue', 'black', 'green', 'orange'][this.value]
    );
  }
}
