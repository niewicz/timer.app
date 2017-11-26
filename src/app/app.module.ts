import { metaReducers } from './store/index';
import { EffectsModule } from '@ngrx/effects';
import './rxjs.imports';

import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { AppRoutingModule } from './/app-routing.module';
import { SharedModule } from './modules/shared/shared.module';

import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AuthModule } from './modules/auth/auth.module';

import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthEffects } from './modules/auth/shared/auth.effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    HttpClientModule,

    StoreModule.forRoot(reducers, { metaReducers }),

    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 25 })
      : [],

    EffectsModule.forRoot([AuthEffects]),

    AppRoutingModule,
    SharedModule,

    AuthModule,
    DashboardModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },

    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
