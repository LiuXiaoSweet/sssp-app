import { Component, OnInit } from '@angular/core';
import { BootService } from '../services/boot.service';

@Component({
    selector: 'app-acc-info',
    templateUrl: './acc-info.component.html',
    styleUrls: ['./acc-info.component.scss']
})
export class AccInfoComponent implements OnInit {

    constructor(public boot: BootService) {
    }

    ngOnInit(): void {
    }

}
