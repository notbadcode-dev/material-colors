import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PaginationComponent } from './components/pagination/pagination.component';

import { GlobalUtilService } from './services/global-util.service';
import { LikesComponent } from './components/likes/likes.component';
import { AboutComponent } from './components/about/about.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

const COMPONENTS: any[] = [PaginationComponent, LikesComponent, AboutComponent]

const MAT_MODULES: any[] = [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatListModule]

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    CommonModule,
    MAT_MODULES
  ],
  exports: [ COMPONENTS ],
  providers: [ GlobalUtilService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
