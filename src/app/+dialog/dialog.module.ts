import { NgModule } from '@angular/core';
import { SharedModule, SharedFormsModule } from '../shared';
import { routing } from './about.routing';
import { DialogComponent } from './dialog.component';

@NgModule({
    imports: [
        SharedModule.withoutProviders(),
        SharedFormsModule.withoutProviders(),
        routing
    ],
    declarations: [
        DialogComponent
    ]
})
export class DialogModule { }
