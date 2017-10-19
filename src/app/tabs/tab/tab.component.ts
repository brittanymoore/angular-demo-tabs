import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { TabService } from './../tabs.service';
import { Tab } from '../tab';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

    public tab: Tab = new Tab();
    public activeTab: number = -1;

    @Input() private name: string;

    constructor(private tabService: TabService, private cdRef: ChangeDetectorRef) { }

    public ngOnInit(): void {
        this.tab.name = this.name;
        this.tabService.addTab(this.tab);
        this.tabService.activeSource().subscribe((index: number) => {
            this.activeTab = index;
            this.cdRef.detectChanges();
        });
    }

}
