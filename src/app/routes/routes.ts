import { LayoutComponent } from '../layout/layout.component';

import { 
  HomeComponent,
  RiversComponent,
  HowToComponent, 
  TripsComponent,
  GalleryComponent,
  PricelistComponent,
  ContactComponent 
} from './page';

export const routes = [
  { path: '', 
    component: LayoutComponent, 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'ako-na-vodu', component: HowToComponent },
      { path: 'rieky', component: RiversComponent },      
      { path: 'vylety', component: TripsComponent },
      { path: 'galeria', component: GalleryComponent },
      { path: 'cennik', component: PricelistComponent },
      { path: 'kontakt', component: ContactComponent }
    ]
  }
];