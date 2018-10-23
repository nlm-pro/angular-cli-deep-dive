import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export const modules = [MatToolbarModule, MatIconModule, MatButtonModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class CustomMaterialModule {}
