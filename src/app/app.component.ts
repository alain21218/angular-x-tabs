import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data = [
    {
      title: Math.random(),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      unsaved: false
    },
    {
      title: Math.random().toFixed(3),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      unsaved: false
    },
    {
      title: Math.random().toFixed(3),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      unsaved: false
    }
  ];

  public addData() {
    this.data.push({
      title: 'new item',
      content: 'content',
      unsaved: true
    });
  }

  public saveData() {
    alert('Saved !');
  }
}
