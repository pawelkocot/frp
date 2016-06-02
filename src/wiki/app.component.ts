import {Component, ViewChild, ElementRef} from '@angular/core'
import {WikipediaService} from "./wikipedia.service";
import {Observable} from 'rxjs/Rx'

@Component({
    selector: 'app',
    template: `
        <input #term /> <span [hidden]="!searching">loading...</span>
        <div>
            <ul>
                <li *ngFor="let result of searchResult|async">{{ result }}</li>
            </ul>
        </div>
        
    `
})
export class AppComponent {
    @ViewChild('term') term:ElementRef

    public searching:boolean = false
    public searchResult:Observable<string[]>

    constructor(private wikipedia:WikipediaService) {
    }

    ngAfterViewInit() {
        const debounced = Observable.fromEvent(this.term.nativeElement, 'keyup')
            .pluck('target', 'value')
            .filter((text:string) => text.length > 2)
            .distinctUntilChanged()
            .debounceTime(500)

        const result = debounced.switchMap((text:string) => this.wikipedia.search(text))

        this.searchResult = result

        // result.subscribe(result => console.log(result))

        debounced
            .mapTo(true)
            .startWith(false)
            .merge(result.mapTo(false))
            .subscribe((result:boolean) => this.searching = result)
        //
        // /* Now debounce the input for 500ms */
        // var debounced = keyups
        //     .debounce(500 /* ms */);
        //
        // /* Now get only distinct values, so we eliminate the arrows and other control characters */
        // var distinct = debounced.distinctUntilChanged();
        // var suggestions = distinct.switchMap(this.wikipedia.search);
        //
        // suggestions.subscribe(result => console.log(result))
    }
}