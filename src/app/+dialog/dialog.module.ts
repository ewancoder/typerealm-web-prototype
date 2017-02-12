import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { routing } from './about.routing';
import { DialogComponent } from './dialog.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedModule.withoutProviders(),
        routing
    ],
    declarations: [
        DialogComponent
    ]
})
export class DialogModule { }
