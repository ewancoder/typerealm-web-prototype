import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { LoggerService } from 'ewancoder-angular-logger';

@Injectable()
export class TypeService {
    private readonly charSubject: Subject<string>;
    private readonly backspaceSubject: Subject<boolean>;

    constructor(private readonly logger: LoggerService) {
        this.charSubject = new Subject<string>();
        this.backspaceSubject = new Subject<boolean>();

        this.logger.log('Initialized TypeService.', ['init', 'type', 'service']);
    }

    get char$(): Observable<string> {
        return this.charSubject.asObservable();
    }

    get backspace$(): Observable<boolean> {
        return this.backspaceSubject.asObservable();
    }

    type(char: string): void {
        if (char.length !== 1) {
            throw "Character length should be equal to zero.";
        }

        this.charSubject.next(char);
    }

    backspace(): void {
        this.backspaceSubject.next(true);
    }
}
