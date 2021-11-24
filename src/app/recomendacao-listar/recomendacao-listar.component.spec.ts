import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacaoListarComponent } from './recomendacao-listar.component';

describe('RecomendacaoListarComponent', () => {
  let component: RecomendacaoListarComponent;
  let fixture: ComponentFixture<RecomendacaoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendacaoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendacaoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
