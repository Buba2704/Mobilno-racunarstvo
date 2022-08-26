import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OmiljeniDetaljiPage } from './omiljeni-detalji.page';

describe('OmiljeniDetaljiPage', () => {
  let component: OmiljeniDetaljiPage;
  let fixture: ComponentFixture<OmiljeniDetaljiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OmiljeniDetaljiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OmiljeniDetaljiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
