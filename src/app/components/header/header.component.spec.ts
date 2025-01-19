import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent, 
        MatToolbarModule, 
        MatIconModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const testTitle = 'Test Title';
    component.title = testTitle;
    fixture.detectChanges();
    
    const titleElement = fixture.debugElement.query(By.css('.title'));
    expect(titleElement.nativeElement.textContent).toContain(testTitle);
  });

  it('should display subtitle when provided', () => {
    const testSubtitle = 'Test Subtitle';
    component.subtitle = testSubtitle;
    fixture.detectChanges();
    
    const subtitleElement = fixture.debugElement.query(By.css('.subtitle'));
    expect(subtitleElement.nativeElement.textContent).toContain(testSubtitle);
  });

  it('should show menu button when showMenuButton is true', () => {
    component.showMenuButton = true;
    fixture.detectChanges();
    
    const menuButton = fixture.debugElement.query(By.css('button[aria-label="Menu"]'));
    expect(menuButton).toBeTruthy();
  });

  it('should hide menu button when showMenuButton is false', () => {
    component.showMenuButton = false;
    fixture.detectChanges();
    
    const menuButton = fixture.debugElement.query(By.css('button[aria-label="Menu"]'));
    expect(menuButton).toBeFalsy();
  });
});