import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationModule } from 'ewancoder-angular-localization';
import { ComponentsModule } from './components';

@NgModule({
    exports: [
        CommonModule,
        LocalizationModule,
        ComponentsModule
    ]
})
export class SharedModule {
    static withoutProviders(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        }
    }
}

//////////

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from 'ewancoder-angular-forms';

@NgModule({
    exports: [
        ReactiveFormsModule,
        FormsModule
    ]
})
export class SharedFormsModule {
    static withoutProviders(): ModuleWithProviders {
        return {
            ngModule: SharedFormsModule,
            providers: []
        }
    }
}
