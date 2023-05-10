import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appShadow]',
})
export class ShadowDirective {
  @Input() appShadow: string;
  @Input() appShadowX: string;
  @Input() appShadowY: string;
  @Input() appShadowBlur: string;
  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseover', [])
  onHover() {
    let shadowStr = `${this.appShadowX} ${this.appShadowY} ${this.appShadowBlur} ${this.appShadow}`;
    this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', shadowStr);
  }

  @HostListener('mouseout', [])
  onHoverout() {
    let shadowStr = `${this.appShadowX} ${this.appShadowY} ${this.appShadowBlur} ${this.appShadow}`;
    this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', 'none');
    this.renderer.setStyle(this.elem.nativeElement, 'cursor', 'pointer');
  }
}
