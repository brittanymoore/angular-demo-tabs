import { Tab } from './tab';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export class TabService {

    private tabMoveSource: Subject<number> = new Subject<number>();
    private tabMove$: Observable<number> = this.tabMoveSource.asObservable();
    private addTabSource: Subject<Tab> = new Subject<Tab>();
    private addTab$: Observable<Tab> = this.addTabSource.asObservable();

    private tabIndex: number = 0;

    public addTab(tab: Tab): Tab {
        this.addTabSource.next(tab);
        tab.id = this.tabIndex++;
        return tab;
    }

    public tabSource(): Observable<Tab> {
        return this.addTab$;
    }

    public activateTab(tab: Tab): void {
        this.tabMoveSource.next(tab.id);
    }

    public activeSource(): Observable<number> {
        return this.tabMove$;
    }

}
