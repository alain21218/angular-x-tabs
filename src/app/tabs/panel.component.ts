import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from './tabs.component';

@Component({
  selector: 'ngx-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() title: string;
  public active = false;

  @Input()
  public unsaved = false;

  constructor(tab:TabsComponent) {
    tab.addPanel(this);
  }

  ngOnInit() {
    
  }

  public show() {
    this.active = true;
  }

  public hide() {
    this.active = false;
  }

}