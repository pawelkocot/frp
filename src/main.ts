import { bootstrap } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'
// import { AppComponent } from './app/app.component'
// import { AppComponent } from './buttons/app.component'
// import { AppComponent } from './todo/app.component'
import { AppComponent } from './wiki/app.component'

import {WikipediaService} from './wiki/wikipedia.service'
import {JSONP_PROVIDERS} from '@angular/http'

enableProdMode()
//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [JSONP_PROVIDERS, WikipediaService])