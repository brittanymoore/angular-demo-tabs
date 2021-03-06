import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabsModule } from './tabs/tabs.module';

@NgModule({
    imports: [
        BrowserModule,
        TabsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
