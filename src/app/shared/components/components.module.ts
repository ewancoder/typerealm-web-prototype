import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TyperComponent } from './typer.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        TyperComponent
    ],
    exports: [
        TyperComponent
    ]
})
export class ComponentsModule { }
