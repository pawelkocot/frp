import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
// import { AppComponent } from './app/app.component';
// import { AppComponent } from './buttons/app.component';
import { AppComponent } from './todo/app.component';

if (true || process.env.ENV === 'production') {
    enableProdMode();
}
//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, []);