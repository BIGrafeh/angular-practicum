import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsSummeryComponent } from './comments-summery.component';

describe('CommentsSummeryComponent', () => {
  let component: CommentsSummeryComponent;
  let fixture: ComponentFixture<CommentsSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsSummeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
