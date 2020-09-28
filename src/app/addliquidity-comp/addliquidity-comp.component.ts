import { Component, OnInit } from '@angular/core';
import { BootService } from '../services/boot.service';

export enum ActionStatus {
    None, Approving, Approved, TransationSending, TransactionEnd, daiApproving, busdApproving, usdtApproving
}

@Component({
    selector: 'app-addliquidity-comp',
    templateUrl: './addliquidity-comp.component.html',
    styleUrls: ['./addliquidity-comp.component.scss']
})
export class AddliquidityCompComponent implements OnInit {

    daiAmt: number;

    busdAmt: number;

    usdtAmt: number;

    daiApproved: boolean = false;

    busdApproved: boolean = false;

    usdtApproved: boolean = false;

    status: ActionStatus = ActionStatus.None;

    constructor(public boot: BootService) { }

    ngOnInit(): void {
    }

    approve() {
        if (this.daiAmt || this.busdAmt || this.usdtAmt) {
            this.status = ActionStatus.Approving;
            let pArr = new Array();
            if (this.daiAmt) {
                pArr.push(this.boot.approve(0, String(this.daiAmt ? this.daiAmt : 0)));
            }
            if (this.busdAmt) {
                pArr.push(this.boot.approve(1, String(this.busdAmt ? this.busdAmt : 0)));
            }
            if (this.daiAmt) {
                pArr.push(this.boot.approve(2, String(this.usdtAmt ? this.usdtAmt : 0)));
            }
            Promise.all(pArr).then(rArr => {
                this.status = ActionStatus.Approved;
            });
        }
    }

    approveDai() {
        this.status = ActionStatus.Approving;
        if (this.daiAmt) {
            this.boot.approve(0, String(this.daiAmt ? this.daiAmt : 0)).then(r => {
                this.daiApproved = true;
                this.status = ActionStatus.Approved;
            });
        }
    }

    approveBusd() {
        this.status = ActionStatus.Approving;
        if (this.busdAmt) {
            this.boot.approve(1, String(this.busdAmt ? this.busdAmt : 0)).then(r => {
                this.busdApproved = true;
                this.status = ActionStatus.Approved;
            });
        }
    }

    approveUsdt() {
        this.status = ActionStatus.Approving;
        if (this.daiAmt) {
            this.boot.approve(2, String(this.daiAmt ? this.daiAmt : 0)).then(r => {
                this.usdtApproved = true;
                this.status = ActionStatus.Approved;
            });
        }
    }

    addLiquidity() {
        if (this.daiAmt && this.busdAmt && this.usdtAmt) {
            this.status = ActionStatus.TransationSending;
            this.boot.addLiquidity(String(this.daiAmt), String(this.busdAmt), String(this.usdtAmt)).then(r => {
                this.status = ActionStatus.TransactionEnd;
            });
        }
    }

}
