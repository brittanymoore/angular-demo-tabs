import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabService } from './tabs.service';

import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        TabService
    ],
    declarations: [
        TabsComponent,
        TabComponent
    ],
    exports: [
        TabsComponent,
        TabComponent
    ]
})
export class TabsModule { }
