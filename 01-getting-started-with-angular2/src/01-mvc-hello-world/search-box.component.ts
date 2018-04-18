import { Component, Input } from '@angular/core';

@Component({
    selector: 'search-box',
    template: `<input placeholder= {{text}} #input>
                <button (click)="clear(input)">Search</button>`,
    
})
export class Search {

    @Input('placeholder')
    text = 'Type';

    clear(input) {
        console.log('clicked...', input);
        input.value = '';
    }
}