import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        DialogComponent
    ],
    exports: [
        DialogComponent
    ]
})
export class ComponentsModule { }
