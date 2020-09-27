import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-swap-comp',
    templateUrl: './swap-comp.component.html',
    styleUrls: ['./swap-comp.component.scss']
})
export class SwapCompComponent implements OnInit {
    left: string = '0';

    right: string = '0';

    constructor() { }

    ngOnInit(): void {
    }
    chooseLeft(val) {
        console.log('left ' + val);
    }
    chooseRight(val) {
        console.log('right ' + val);
    }
}
