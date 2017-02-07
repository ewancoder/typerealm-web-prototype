import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'typerealm-app',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent { }
