import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddMenuItemPage } from './add-menu-item.page';

describe('AddMenuItemPage', () => {
  let component: AddMenuItemPage;
  let fixture: ComponentFixture<AddMenuItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMenuItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMenuItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
