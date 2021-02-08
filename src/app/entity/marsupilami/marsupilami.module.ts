import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMarsupilamiComponent } from './add/add-marsupilami.component';
import { EditMarsupilamiComponent } from './edit/edit-marsupilami.component';
import { ListMarsupilamiComponent } from './list/list-marsupilami.component';
import { MarsupilamiService } from './marsupilami.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AddMarsupilamiComponent,
    EditMarsupilamiComponent,
    ListMarsupilamiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    SlimLoadingBarModule
  ],
  providers:[
    MarsupilamiService
  ]
})
export class MarsupilamiModule { }
