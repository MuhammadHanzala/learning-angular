
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import { Search } from "./search-box.component";
import { ColorPicker } from "./color-picker";


@Component({
    selector:'hello-world',
    template: `<color-picker></color-picker>`
})
export class HelloWorld {

}


@NgModule({
    declarations: [HelloWorld, Search, ColorPicker],
    imports: [BrowserModule],
    bootstrap: [HelloWorld]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);


