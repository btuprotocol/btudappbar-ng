import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtuDappbarComponent } from './btu-dappbar.component';
import { ModalComponent, NgbdModalContent } from './modal/modal.component';
import { TestComponent } from './test/test.component'

describe('BtuDappbarComponent', () => {
  let component: BtuDappbarComponent;
  let fixture: ComponentFixture<BtuDappbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtuDappbarComponent, ModalComponent, NgbdModalContent, TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtuDappbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
