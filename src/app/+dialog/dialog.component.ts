import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TypeService } from '../shared/type.service';

interface DialogOption {
    optionId: string;
    text: string;
}

@Component({
    templateUrl: './dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
    // These will be inputs.
    intro: string;
    options: DialogOption[];

    alreadyTyped: string;

    readonly inputControl: FormControl = new FormControl('');

    constructor(
        typeService: TypeService,
        private readonly cd: ChangeDetectorRef) {

        this.intro = "Welcome to the Typing Realm.";
        this.options = [
            { optionId: '1', text: 'I want to play' },
            { optionId: '2', text: 'I want to exit' }
        ];

        typeService.char$.subscribe(c => {
            if (this.alreadyTyped === undefined) {
                this.alreadyTyped = c;
                this.cd.markForCheck();
                return;
            }

            this.alreadyTyped += c;

            this.checkInput();
            this.cd.markForCheck();
        });

        typeService.backspace$.subscribe(c => {
            if (this.alreadyTyped && this.alreadyTyped.length > 0) {
                this.alreadyTyped = this.alreadyTyped.substring(0, this.alreadyTyped.length - 1);
            }

            this.cd.markForCheck();
        });
    }

    choose(option: DialogOption): void {
        if (option.optionId === '2') {
            alert("Can't close window because javascript doesn't allow to do so.");
        } else if (option.optionId === '1') {
            alert("Can't start game session because the game hasn't been developed yet.");
        }
    }

    private checkInput(): void {
        for (let i = 0, length = this.options.length; i < length; i++) {
            if (this.alreadyTyped === this.options[i].text) {
                this.choose(this.options[i]);
                return;
            }
        }
    }
}
