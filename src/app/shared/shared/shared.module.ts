import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShadowDirective } from './shadow.directive';

@NgModule({
  imports: [CommonModule],
  exports: [ShadowDirective],
  declarations: [ShadowDirective],
})
export class SharedModule {}
