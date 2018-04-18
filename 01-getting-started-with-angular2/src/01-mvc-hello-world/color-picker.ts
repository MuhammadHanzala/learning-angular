import { Component } from '@angular/core';

@Component({
    selector: 'color-picker',
    template: `
        <div class="color-title">
            Pick a color
        </div>
        <div class="color-picker">
            <div class="color-sample color-sample-blue"></div>
            <div class="color-sample color-sample-red"></div>
        </div>
    `
})
export class ColorPicker {

}