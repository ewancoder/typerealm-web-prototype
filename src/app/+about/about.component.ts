import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
    private readonly initialText: string;
    private finished: boolean;
    
    constructor() {
        this.initialText = `The Honourable Ronald Adair was the second son of the Earl of Maynooth, at that time Governor of one of the Australian Colonies. Adair's mother had returned from Australia to undergo the operation for cataract, and she, her son Ronald, and her daughter Hilda were living together at 427, Park Lane.`;
    }

    repeat() {
        this.finished = false;
    }
}
