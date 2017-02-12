import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'typer',
    templateUrl: './typer.component.html',
    styleUrls: ['./typer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TyperComponent implements OnChanges, OnInit {
    @Input() readonly text: string;
    @Output() readonly speed: EventEmitter<number> = new EventEmitter<number>();
    @Input() input: string;
    readonly inputControl: FormControl = new FormControl('');
    previous: string;
    written: string;
    left: string;
    wrong: boolean;

    begin: Date;

    constructor(private readonly cd: ChangeDetectorRef) {
        this.previous = '';
        this.written = '';
        this.left = '';
        this.wrong = false;
    }

    ngOnChanges() {
        if (this.input !== undefined) {
            this.inputControl.setValue(this.input);
        }
    }

    ngOnInit() {
        this.left = this.text;

        this.inputControl.valueChanges.subscribe((value: string) => {
            if (this.begin === undefined) {
                this.begin = new Date();
            }

            if (this.text.startsWith(value) && (Math.abs(this.previous.length - value.length) <= 1)) {
                this.written = value;
                this.left = this.text.substring(value.length, this.text.length);
                this.previous = value;
                this.wrong = false;
            } else {
                this.wrong = true;
                return;
            }

            if (this.written === this.text) {
                let end = new Date();
                let speed = 60 * (this.text.length / 5) / ((end.getTime() - this.begin.getTime()) / 1000);
                this.begin = undefined;

                this.inputControl.setValue('');
                this.previous = '';
                this.written = '';
                this.left = '';
                this.wrong = false;

                this.speed.emit(speed);
            }

            this.cd.markForCheck();
        });
    }

    intercept(e: KeyboardEvent) {
        if (e.code === 'Tab') {
        }
    }
}
