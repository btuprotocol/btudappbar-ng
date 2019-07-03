import { NgModule } from '@angular/core';
import { BtuDappbarComponent } from './btu-dappbar.component';
import { ModalComponent, NgbdModalContent } from './modal/modal.component'

@NgModule({
  declarations: [BtuDappbarComponent, ModalComponent, NgbdModalContent],
  imports: [
  ],
  exports: [BtuDappbarComponent]
})
export class BtuDappbarModule { }
