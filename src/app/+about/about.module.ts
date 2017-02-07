import { NgModule } from '@angular/core';
import { SharedModule, SharedFormsModule } from '../shared';
import { routing } from './about.routing';
import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        SharedModule.withoutProviders(),
        SharedFormsModule.withoutProviders(),
        routing
    ],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule { }
