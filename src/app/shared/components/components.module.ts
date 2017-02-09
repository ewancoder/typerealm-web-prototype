import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TyperComponent } from './typer.component';

@NgModule({
    imports: [
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
