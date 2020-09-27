import { Component, OnInit } from '@angular/core';
import { BootService } from '../services/boot.service';

@Component({
    selector: 'app-pool-info',
    templateUrl: './pool-info.component.html',
    styleUrls: ['./pool-info.component.scss']
})
export class PoolInfoComponent implements OnInit {

    constructor(public boot: BootService) { }

    ngOnInit(): void {
    }
    getTotal() {
        return this.boot.poolInfo.dai.plus(this.boot.poolInfo.busd).plus(this.boot.poolInfo.usdt);
    }

    daiPercent() {
        return this.boot.poolInfo.dai.div(this.getTotal()).multipliedBy(100);
    }
    busdPercent() {
        return this.boot.poolInfo.busd.div(this.getTotal()).multipliedBy(100);
    }
    usdtPercent() {
        return this.boot.poolInfo.usdt.div(this.getTotal()).multipliedBy(100);
    }
}
