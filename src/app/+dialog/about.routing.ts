import { Routes, RouterModule } from '@angular/router';
import { DialogComponent } from './dialog.component';

const routes: Routes = [
    { path: '', component: DialogComponent }
];

export const routing = RouterModule.forChild(routes);
