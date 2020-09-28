import { Component, OnInit } from '@angular/core';
import { BootService } from '../services/boot.service';

export enum ActionStatus {
    None, Transfering, TrasactionEnd
}

@Component({
    selector: 'app-redeemliquidity-comp',
    templateUrl: './redeemliquidity-comp.component.html',
    styleUrls: ['./redeemliquidity-comp.component.scss']
})
export class RedeemliquidityCompComponent implements OnInit {

    daiAmt: number;

    busdAmt: number;

    usdtAmt: number;

    status: ActionStatus = ActionStatus.None;

    constructor(public boot: BootService) { }

    ngOnInit(): void {
    }

    redeemCoin() {
        if (this.daiAmt || this.busdAmt || this.usdtAmt) {
            this.status = ActionStatus.Transfering;
            this.boot.redeemImBalance(String(this.daiAmt ? this.daiAmt : 0), String(this.busdAmt ? this.daiAmt : 0), String(this.usdtAmt ? this.daiAmt : 0)).then(r => {
                this.status = ActionStatus.TrasactionEnd;
            });
        }
    }

}
