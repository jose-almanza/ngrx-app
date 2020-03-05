import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './post/post.reducer';
import { PostComponent } from './post/post.component';
import { PostEffects } from './post/post.effects';
import { EffectsModule } from '@ngrx/effects';
import { PostModule } from './post/post.module';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    NgZorroAntdModule,
    StoreModule.forRoot({ posts: postReducer}),
    EffectsModule.forRoot([PostEffects]),
    StoreDevtoolsModule.instrument({}),
    PostModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
