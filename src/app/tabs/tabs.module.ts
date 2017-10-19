import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';

import { TabsComponent } from './tabs.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';

@NgModule({
    imports: [
        CommonModule,
        TabsRoutingModule
    ],
    declarations: [
        TabsComponent,
        Tab1Component,
        Tab2Component
    ],
    exports: [ TabsComponent]
})
export class TabsModule { }
