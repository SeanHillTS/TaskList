import { CardComponent } from './card/card.component';
import { AppComponent } from './app.component';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

//The decorator
@NgModule({
    imports:[ BrowserModule ],
    //Declarations are self-defined components in ypur app
    declarations: [ AppComponent, CardComponent ],
    //Bootstrap to the root
    bootstrap: [AppComponent]
})

export class AppModule{};