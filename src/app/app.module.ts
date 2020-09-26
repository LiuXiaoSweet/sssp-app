import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccInfoComponent } from './acc-info/acc-info.component';
import { PoolInfoComponent } from './pool-info/pool-info.component';
import { AddLiquidityComponent } from './add-liquidity/add-liquidity.component';
import { SwapCoinComponent } from './swap-coin/swap-coin.component';
import { RedeemCoinComponent } from './redeem-coin/redeem-coin.component';
import { RedeemAllComponent } from './redeem-all/redeem-all.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntallWalletDlgComponent } from './intall-wallet-dlg/intall-wallet-dlg.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        AppComponent,
        AccInfoComponent,
        PoolInfoComponent,
        AddLiquidityComponent,
        SwapCoinComponent,
        RedeemCoinComponent,
        RedeemAllComponent,
        IntallWalletDlgComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
