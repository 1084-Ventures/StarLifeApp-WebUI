import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material.module';
import { NavDrawerComponent } from './nav-drawer.component';

describe('NavDrawerComponent', () => {
  let component: NavDrawerComponent;
  let fixture: ComponentFixture<NavDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavDrawerComponent,
        MaterialModule,
        RouterTestingModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have navigation items', () => {
    expect(component.navItems.length).toBeGreaterThan(0);
  });

  it('should render nav items', () => {
    const compiled = fixture.nativeElement;
    const navItems = compiled.querySelectorAll('mat-nav-list a');
    expect(navItems.length).toBe(component.navItems.length);
  });

  it('should render brand navigation items', () => {
    const compiled = fixture.nativeElement;
    const navItems = compiled.querySelectorAll('mat-nav-list a');
    expect(navItems.length).toBe(3);
    expect(navItems[0].textContent).toContain('Brand 1');
  });

  it('should react to isDrawerOpen changes', () => {
    component.isDrawerOpen = false;
    fixture.detectChanges();
    const sidenav = fixture.nativeElement.querySelector('mat-sidenav');
    expect(sidenav.getAttribute('ng-reflect-opened')).toBe('false');
  });
});
