import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

    constructor(private router: Router) { }

    public ngOnInit(): void {
        this.router.navigate([{ outlets: { tabs: ['tab1'] }}]);
    }

}
