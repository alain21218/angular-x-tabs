import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { TabsComponent } from './tabs.component';
import { ActionComponent } from './action.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabsComponent, PanelComponent, ActionComponent],
  exports: [TabsComponent, PanelComponent, ActionComponent]
})
export class TabsModule { }