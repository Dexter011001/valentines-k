import { Routes } from '@angular/router';
import { ValentineComponentComponent } from './valentine-component/valentine-component.component';

export const routes: Routes = [
  { path: '', redirectTo: '/valentine', pathMatch: 'full' }, // Redirect to ValentineComponent
  { path: 'valentine', component: ValentineComponentComponent }        // Route to ValentineComponent
];