import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsPageComponent} from './posts-page.component';
import {StoreModule} from '@ngrx/store';
import * as fromPosts from './reducers/posts.reducer';
import {EffectsModule} from '@ngrx/effects';
import {PostEffects} from './effects/posts.effects';
import {NzSpinModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [PostsPageComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.reducer),
    EffectsModule.forFeature([PostEffects]),
    NzSpinModule
  ]
})
export class PostsModule {
}
