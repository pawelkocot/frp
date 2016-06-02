import {Injectable} from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';

@Injectable()
export class WikipediaService {
    constructor(private jsonp: Jsonp) {}

    search (term: string) {
        const params = new URLSearchParams();
        params.set('search', term); // the user's search value
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp
            .get('http://en.wikipedia.org/w/api.php', { search: params })
            .map(result => <string[]> result.json()[1])
            .delay(1000)
    }
}