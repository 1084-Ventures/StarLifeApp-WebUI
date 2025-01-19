import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavDrawerComponent } from './nav-drawer.component';

describe('NavDrawerComponent', () => {
  let component: NavDrawerComponent;
  let fixture: ComponentFixture<NavDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavDrawerComponent, MatSidenavModule, MatListModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
