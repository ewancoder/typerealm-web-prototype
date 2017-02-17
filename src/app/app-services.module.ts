import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule } from 'ewancoder-angular-http';
import { LocalizationModule, Translation, provideI18nTranslations } from 'ewancoder-angular-localization';
import { LoggerModule, verboseLoggerServiceProvider } from 'ewancoder-angular-logger';
import { ApiConfig, TypeService } from './shared';

let translations: Translation[] = [
    {
        language: 'en-US',
        translations: require('./i18n/en-US.json')
    },
    {
        language: 'ru-RU',
        translations: require('./i18n/ru-RU.json')
    }
];

@NgModule({
    imports: [
        HttpModule.forRoot(),
        LocalizationModule.forRoot(),
        LoggerModule.forRoot()
    ]
})
export class AppServicesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppServicesModule,
            providers: [
                ApiConfig,
                verboseLoggerServiceProvider,
                provideI18nTranslations(translations),

                TypeService
            ]
        };
    }
}
