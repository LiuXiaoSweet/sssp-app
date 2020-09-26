import { Component } from '@angular/core';
import { BootService } from './services/boot.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'sssp-app';

    curTab = 0;

    constructor(public boot: BootService) {
    }

    public connectWallet() {
        this.boot.connectWallet();
    }

    changeTab(tab) {
        this.curTab = tab;
    }

    getTotal() {
        return this.boot.poolInfo.dai.plus(this.boot.poolInfo.busd).plus(this.boot.poolInfo.usdt);
    }
}
