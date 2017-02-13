import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface DialogOption {
    optionId: string;
    text: string;
}

@Component({
    templateUrl: './dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
    // These will be inputs.
    intro: string;
    options: DialogOption[];

    readonly inputControl: FormControl = new FormControl('');

    constructor() {
        this.intro = "Welcome to the Typing Realm.";
        this.options = [
            { optionId: '1', text: 'I want to play' },
            { optionId: '2', text: 'I want to exit' }
        ];
    }

    choose(option: DialogOption) {
        if (option.optionId === '2') {
            alert("Can't close window because javascript doesn't allow to do so.");
        } else if (option.optionId === '1') {
            alert("Can't start game session because the game hasn't been developed yet.");
        }
    }
}
