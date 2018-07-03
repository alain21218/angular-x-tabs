import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PanelComponent } from './panel.component';

@Component({
  selector: 'ngx-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  panels: PanelComponent[] = [];

  constructor() { }

  ngOnInit() {
  }

  addPanel(panel: PanelComponent) {
    if (this.panels.length === 0) {
      panel.show();
    }

    this.panels.push(panel);
  }

  selectPanel(panel: PanelComponent) {
    this.panels.forEach((panel) => {
      panel.hide();
    });

    panel.show();
  }

}
