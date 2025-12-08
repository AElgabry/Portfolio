import { Routes } from '@angular/router';
import { Default } from './Layout/default/default';
import { Details } from './Layout/details/details';

export const routes: Routes = [
  { path: '', component: Default,},
  { path: 'details/:id', component: Details },
  {path:"**",component:Default}
];
