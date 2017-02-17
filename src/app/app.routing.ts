import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/dialog', pathMatch: 'full' },
    { path: 'about', loadChildren: './+about/about.module#AboutModule' },
    { path: 'dialog', loadChildren: './+dialog/dialog.module#DialogModule' }
];

export const routing = RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules });
