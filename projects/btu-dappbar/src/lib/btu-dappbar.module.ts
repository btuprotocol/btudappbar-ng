import { NgModule } from '@angular/core';
import { BtuDappbarComponent } from './btu-dappbar.component';
import { ModalComponent, NgbdModalContent } from './modal/modal.component';
import { CommonModule } from '@angular/common'
//import { TestComponent } from './test/test.component'

@NgModule({
  declarations: [BtuDappbarComponent, ModalComponent, NgbdModalContent ],
  imports: [
    CommonModule
  ],
  exports: [BtuDappbarComponent]
})
export class BtuDappbarModule { }
