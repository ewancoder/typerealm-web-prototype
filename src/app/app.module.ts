import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared';
import { AppServicesModule } from './app-services.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule.withoutProviders(),
        AppServicesModule.forRoot(),
        routing
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
