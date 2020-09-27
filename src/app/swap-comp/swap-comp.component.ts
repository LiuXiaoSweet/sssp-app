import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { BootService } from '../services/boot.service';

@Component({
    selector: 'app-swap-comp',
    templateUrl: './swap-comp.component.html',
    styleUrls: ['./swap-comp.component.scss']
})
export class SwapCompComponent implements OnInit {
    left: string = '0';

    right: string = '1';

    balance: BigNumber;

    amt: string;

    constructor(public boot: BootService) { }

    ngOnInit(): void {
    }
    chooseLeft(val) {
        this.left = val;
        if (this.left === this.right) {
            if (this.right !== '2') {
                this.right = String(Number(this.right) + 1);
            } else {
                this.right = '0';
            }
        }
        console.log('left ' + this.left);
    }
    chooseRight(val) {
        this.right = val;
        if (this.left === this.right) {
            if (this.left !== '2') {
                this.left = String(Number(this.right) + 1);
            } else {
                this.left = '0';
            }
        }
        console.log('right ' + this.right);
    }

    maxAmt() {
        switch (this.left) {
            case '0':
                this.amt = this.boot.balance.dai.toFixed(9);
                break;
            case '1':
                this.amt = this.boot.balance.busd.toFixed(9);
                break;
            case '2':
                this.amt = this.boot.balance.usdt.toFixed(9);
                break;
        }
    }
}
