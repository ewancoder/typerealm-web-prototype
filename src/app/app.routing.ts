import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', loadChildren: './+about/about.module#AboutModule' }
];

export const routing = RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules });
