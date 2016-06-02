import {Component, ViewChild, ElementRef} from '@angular/core'
import {Observable} from 'rxjs/Rx'
import {Http} from "@angular/http";

@Component({
    selector: 'app',
    template: `
        <button #down>Down</button>
        <button #up>Up</button>
        
        {{ counter }}
    `
})
export class AppComponent {
    @ViewChild('down') down;
    @ViewChild('up') up;
    public counter = 0

    constructor(private http:Http) {}

    ngAfterViewInit() {
        const getData = this.http.get('http://fsdfsdfsdfsd.com')

        getData
            .retryWhen(stream => stream.delay(1000).take(3))
            .subscribe(
                result => console.log(result),
                error => console.error('!!!!!', error)
            )

        // const down = Observable.fromEvent(this.down.nativeElement, 'click')
        // const up = Observable.fromEvent(this.up.nativeElement, 'click')
        //
        // const debounced = down.mapTo('xxx').debounceTime(300)
        //
        // down
        //     .buffer(debounced)
        //     .filter(clicks => clicks.length === 3)
        //     .subscribe(val => console.log('tripple'))

        // down.mapTo(-1).merge(up.mapTo(1))
        //     .scan((cur, prev) => cur+prev, this.counter)
        //     .subscribe(value => this.counter = value)


    }
}