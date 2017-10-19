import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2Component } from './tab2/tab2.component';
import { Tab1Component } from './tab1/tab1.component';

const routes: Routes = [
    { path: 'tab1', outlet: 'tabs', component: Tab1Component },
    { path: 'tab2', outlet: 'tabs', component: Tab2Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
