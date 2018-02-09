import { TestBed, async } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LoginModule } from './login/index';
import {TopNavComponent, FooterComponent} from './shared/index';
import { HomeModule } from './home/index';
import { APP_BASE_HREF } from '@angular/common';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TopNavComponent,
        FooterComponent
      ],
      imports: [
        LoginModule,
        RouterModule,
        HomeModule,
        RouterModule.forRoot(routes),
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
