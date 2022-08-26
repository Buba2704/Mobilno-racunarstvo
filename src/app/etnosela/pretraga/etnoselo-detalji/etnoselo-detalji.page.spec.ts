import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EtnoseloDetaljiPage } from './etnoselo-detalji.page';

describe('EtnoseloDetaljiPage', () => {
  let component: EtnoseloDetaljiPage;
  let fixture: ComponentFixture<EtnoseloDetaljiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EtnoseloDetaljiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EtnoseloDetaljiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
