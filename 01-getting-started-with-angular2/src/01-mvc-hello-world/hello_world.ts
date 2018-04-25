
import { Component } from "@angular/core";
import { NgModule } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";
import { Search } from "./search-box.component";
import { ColorPicker } from "./color-picker";
import { ColorPreviewer } from "./color-previewer";


@Component({
    selector: 'hello-world',
    templateUrl: './hello_world.component.html'
})
export class HelloWorld {
    color: string;

    // onColor(color){
    //     console.log("color: ", color)
    // }
}


@NgModule({
    declarations: [HelloWorld, Search, ColorPicker, ColorPreviewer],
    imports: [BrowserModule],
    bootstrap: [HelloWorld]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);


