import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePicSelectorComponent } from './profile-pic-selector.component';

describe('ProfilePicSelectorComponent', () => {
  let component: ProfilePicSelectorComponent;
  let fixture: ComponentFixture<ProfilePicSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePicSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilePicSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
