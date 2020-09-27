import { Component, OnInit } from '@angular/core';
import { BootService } from '../services/boot.service';

@Component({
    selector: 'app-redeemliquidity-comp',
    templateUrl: './redeemliquidity-comp.component.html',
    styleUrls: ['./redeemliquidity-comp.component.scss']
})
export class RedeemliquidityCompComponent implements OnInit {

    daiAmt: number;

    busdAmt: number;

    usdtAmt: number;

    constructor(public boot: BootService) { }

    ngOnInit(): void {
    }

    redeemCoin() {
        if (this.daiAmt || this.busdAmt || this.usdtAmt) {
            this.boot.redeemImBalance(String(this.daiAmt ? this.daiAmt : 0), String(this.busdAmt ? this.daiAmt : 0), String(this.usdtAmt ? this.daiAmt : 0)).then(r => {

            });
        }
    }

}
