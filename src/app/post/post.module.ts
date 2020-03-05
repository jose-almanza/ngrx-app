import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './post.effects';
import { StoreModule } from '@ngrx/store';
import { postReducer, postFeatureKey } from './post.reducer';
import {PostRoutingModule} from './post-routing.module';

@NgModule({
  imports: [
    PostRoutingModule,
    StoreModule.forFeature(postFeatureKey, postReducer),
    EffectsModule.forFeature([PostEffects]),
    
  ],
})
export class PostModule {}