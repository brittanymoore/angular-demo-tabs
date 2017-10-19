import { Component, OnInit, AfterViewInit } from '@angular/core';

import { TabService } from './tabs.service';
import { Tab } from './tab';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    providers: [ TabService ]
})
export class TabsComponent implements OnInit, AfterViewInit {

    public tabs: Tab[] = [];
    public activeTab: number = 0;

    constructor(private tabService: TabService) { }

    public ngOnInit(): void {
        this.tabService.tabSource().subscribe((tab: Tab) => {
            this.tabs.push(tab);
        });
    }

    public ngAfterViewInit(): void {
        if (this.tabs.length) {
            this.tabService.activateTab(this.tabs[this.activeTab]);
        }
    }

    public goToTab(tab: Tab): void {
        this.activeTab = tab.id;
        this.tabService.activateTab(tab);
    }

}
