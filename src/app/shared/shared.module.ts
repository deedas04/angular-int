import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShadowDirective } from './shadow.directive';
import { HeaderComponent } from './header/header.component';
import { CarbonModule } from '../carbon.module';

@NgModule({
  imports: [CommonModule, CarbonModule],
  exports: [ShadowDirective, HeaderComponent],
  declarations: [ShadowDirective, HeaderComponent],
})
export class SharedModule {}
