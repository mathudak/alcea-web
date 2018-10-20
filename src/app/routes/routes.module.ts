import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { routes } from './routes';

import { 
  HomeComponent,
  RiversComponent,
  HowToComponent, 
  TripsComponent,
  GalleryComponent,
  PricelistComponent,
  ContactComponent 
} from './page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    HomeComponent,
    RiversComponent,
    HowToComponent,
    TripsComponent,
    GalleryComponent,
    PricelistComponent,
    ContactComponent
  ],
  exports: [
    RouterModule
  ]
})

export class RoutesModule { }
