import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { MaterialModule } from '../material.module';
@NgModule({
    declarations:[ 
        DashboardComponent
    ],
    imports: [
        DashboardRoutingModule,
        FlexLayoutModule,
        MaterialModule   
    ]
})
export class DashboardModule {}