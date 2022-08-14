import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromComponents from './components';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [...fromComponents.components],
  exports: [
    ...fromComponents.components,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    FontAwesomeModule
  ],
})

export class SharedModule {}