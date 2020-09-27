import { Component, OnInit } from '@angular/core';
import { BootService } from '../services/boot.service';

@Component({
  selector: 'app-addliquidity-comp',
  templateUrl: './addliquidity-comp.component.html',
  styleUrls: ['./addliquidity-comp.component.scss']
})
export class AddliquidityCompComponent implements OnInit {

  constructor(public boot:BootService) { }

  ngOnInit(): void {
  }

}
