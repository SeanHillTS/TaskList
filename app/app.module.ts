import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';


//The decorator
@NgModule({
    imports:[ BrowserModule,FormsModule ],
    //Declarations are self-defined components in ypur app
    declarations: [ AppComponent, CardComponent ],
    //Bootstrap to the root
    bootstrap: [AppComponent]
})

export class AppModule{};

