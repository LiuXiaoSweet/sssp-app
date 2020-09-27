import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoolInfoComponent } from './pool-info/pool-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntallWalletDlgComponent } from './intall-wallet-dlg/intall-wallet-dlg.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SwapCompComponent } from './swap-comp/swap-comp.component';
import { AddliquidityCompComponent } from './addliquidity-comp/addliquidity-comp.component';
import { RedeemliquidityCompComponent } from './redeemliquidity-comp/redeemliquidity-comp.component';

@NgModule({
    declarations: [
        AppComponent,
        PoolInfoComponent,
        IntallWalletDlgComponent,
        SwapCompComponent,
        AddliquidityCompComponent,
        RedeemliquidityCompComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
