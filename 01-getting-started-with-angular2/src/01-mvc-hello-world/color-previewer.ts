import { Component, Input } from "@angular/core";



@Component({
    selector: 'color-previewer',
    template: ` <div class="preview-color" [ngStyle]="{'color': color}">
                    Preview Text Color
                </div>
    `
})
export class ColorPreviewer{

    @Input()
    color:string;
}