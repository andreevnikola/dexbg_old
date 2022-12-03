import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { ClickOutsideDirective } from './click-outside.directive';



@NgModule({
  declarations: [
    PageTitleComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageTitleComponent,
    ClickOutsideDirective
  ]
})
export class SharedModule { }
