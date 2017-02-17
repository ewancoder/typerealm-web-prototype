import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { TypeService } from '../type.service';

@Component({
    selector: 'typer-dialog',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
    options: string[] = ['one', 'two'];

    constructor(private readonly service: TypeService) { }

    @HostListener('document:keypress', ['$event'])
    type(event: KeyboardEvent) {
        this.service.type(event.key);
    }

    @HostListener('document:keydown', ['$event'])
    backspace(event: KeyboardEvent) {
        if (event.keyCode === 8) {
            this.service.backspace();
        }
    }
}