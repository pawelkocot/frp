import {Component, ViewChild, ElementRef} from '@angular/core'
import {Observable} from 'rxjs/Rx'
import {Http} from "@angular/http";

@Component({
    selector: 'app',
    template: `
        <input type="checkbox" #online checked />
        <hr />
        {{ value }}
    `
})
export class AppComponent {
    @ViewChild('online') online:ElementRef
    public value:number

    constructor(private http:Http) {}

    ngAfterViewInit() {
        // this.http.get('http://sdfasdfsadf.com')
        //     .retryWhen((error) => error.delay(1000).take(3))
        //     .subscribe(
        //         result => console.log('success', result),
        //         err => console.error('error', err)
        //     )
        // let isOnline = true;
        // Observable
        //     .fromEvent(this.online.nativeElement, 'change')
        //     .pluck('target', 'checked')
        //     .subscribe((value:boolean) => isOnline = value)
        //
        // let counter = 0;
        //
        // Observable
        //     .interval(1000)
        //     .map(() => {
        //         if (isOnline) {
        //             return ++counter;
        //         }
        //         throw 'offline'
        //     })
        //     .retry(4)
        //     .subscribe(
        //         value => this.value = value,
        //         err => console.error(err)
        //     )
    }
}