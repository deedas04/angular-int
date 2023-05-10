import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CarbonModule } from '../carbon.module';
import { InitialsPipe } from './initials.pipe';
import { ColorMeDirective } from './color-me.directive';

@NgModule({
  imports: [CommonModule, CarbonModule],
  exports: [HeaderComponent, InitialsPipe, ColorMeDirective],
  declarations: [HeaderComponent, InitialsPipe, ColorMeDirective],
})
export class SharedModule {}
