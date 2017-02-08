import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppServicesModule } from './app-services.module';
import { SharedModule } from './shared';
import { routing } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        AppServicesModule.forRoot(),
        SharedModule.withoutProviders(),
        routing
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
