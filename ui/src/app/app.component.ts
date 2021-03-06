import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LicenseService} from './business/setting/license/license.service';
import {BusinessLicenseService} from './shared/service/business-license.service';
import {error} from '@angular/compiler/src/util';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'app';

    constructor(public translate: TranslateService) {
    }

    ngOnInit() {
        const currentLanguage = localStorage.getItem('currentLanguage') || this.translate.getBrowserCultureLang();
        this.translate.setDefaultLang('zh-CN');
        this.translate.use(currentLanguage);
        localStorage.setItem('currentLanguage', currentLanguage);
    }


}
