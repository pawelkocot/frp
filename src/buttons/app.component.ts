import {Component, ElementRef, ViewChild} from '@angular/core'
import {Observable} from 'rxjs/Rx'

@Component({
    selector: 'app',
    template: `
    <button #down>Down</button>
    <button #up>Up</button>
    {{ counter|async }}
    `
})
export class AppComponent {
    @ViewChild('down') down:ElementRef
    @ViewChild('up') up:ElementRef

    private counter:Observable<number>

    ngAfterViewInit() {
        const down = Observable.fromEvent(this.down.nativeElement, 'click')
        const up = Observable.fromEvent(this.up.nativeElement, 'click')

        this.counter = down
            .mapTo(-1)
            .merge(up.mapTo(1))
            .startWith(0)
            .scan<number>((prev, cur) => prev+cur, 0)

        down
            .buffer(down.debounceTime(250))
            .map(clicks => clicks.length)
            .filter(length => length == 2)
            .subscribe(
                (val) => console.log('doubleclick', val),
                (err) => console.error(err),
                () => console.log('complete')
            )

        // down
        //     .bufferTime(250)
        //     // .filter((clicks:any[]) => clicks.length > 1)
        //     .subscribe((val) => {
        //         console.log('buff', val);
        //     })
    }
}