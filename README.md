## DEMO
[View on stackblitz](https://stackblitz.com/github/alain21218/angular-x-tabs)

## Install
```sh
npm install angular-x-tabs
```

## Usage
```ts
import { TabsModule } from 'angular-4-tabs';

//...

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      TabsModule // <---- HERE
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
```

## Example

> HTML
```html
<h1>Vertical</h1>
<ngx-tabs actionLabel="create" class="vertical">
	<ngx-panel *ngFor="let d of data" [title]="d.title" [unsaved]="d.unsaved">
		<p>{{ d.content }}</p>
	</ngx-panel>
</ngx-tabs>

<h2>Horizontal</h2>
<h3>With Action Button</h3>
<ngx-tabs>
  <ngx-action (click)="addData($event)">Add</ngx-action>
  <ngx-action (click)="saveData($event)">Save All</ngx-action>
	<ngx-panel *ngFor="let d of data" [title]="d.title" [unsaved]="d.unsaved">
		<p>{{ d.content }}</p>
	</ngx-panel>
</ngx-tabs>

<h3>Without Action Button</h3>
<ngx-tabs>
	<ngx-panel *ngFor="let d of data" [title]="d.title" [unsaved]="d.unsaved">
    <textarea [(ngModel)]="d.content" (input)="d.unsaved = true"></textarea>
  </ngx-panel>
</ngx-tabs>

```

> TS
```ts
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
```

## API

### ACTION

### TABS

### PANEL

- [title] : Text used for the tab title
- [unsaved] : Boolean used to show a star after the title



