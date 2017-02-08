import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoggerService } from 'ewancoder-angular-logger';

@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
    private readonly input: FormControl = new FormControl();
    private readonly initialText: string = `The Honourable Ronald Adair was the second son of the Earl of Maynooth, at that time Governor of one of the Australian Colonies. Adair's mother had returned from Australia to undergo the operation for cataract, and she, her son Ronald, and her daughter Hilda were living together at 427, Park Lane.`;

    private written: string = '';
    private text: string = '';
    private beginTime: Date;
    private endTime: Date;
    private speed: number;
    private wrong: boolean;
    private previousInput: string = '';

    constructor(
        logger: LoggerService,
        private readonly cd: ChangeDetectorRef) {

        logger.log('Initialized AboutComponent.', ['about', 'component', 'init']);
    }

    ngOnInit() {
        this.input.setValue('');
        this.written = '';
        this.text = this.initialText;
        this.previousInput = '';

        this.input.valueChanges.subscribe((value: string) => {
            if (this.beginTime === undefined) {
                this.beginTime = new Date();
            }
           
            if (this.initialText.startsWith(value) && (Math.abs(this.previousInput.length - value.length) <= 1)) {
                this.written = this.initialText.substring(0, value.length);
                this.text = this.initialText.substring(value.length, this.initialText.length);
                this.wrong = false;
                this.previousInput = value;
            } else {
                this.written = '';
                this.text = this.initialText;
                this.wrong = true;
                return;
            }

            if (this.written === this.initialText) {
                this.endTime = new Date();
                this.speed = 60 * (this.initialText.length / 5) / ((this.endTime.getTime() - this.beginTime.getTime()) / 1000);
                this.beginTime = undefined;

                this.written = '';
                this.text = this.initialText;
                this.previousInput = '';
                this.input.setValue('');
                return;
            }
 
            this.cd.markForCheck();
        });
    }

    onSubmit() {
        this.endTime = undefined;
    }
}
