import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-jumbotron',
  template: `
    <div class="jumbotron">
        <h1><ng-content select=".heading"></ng-content></h1>
        <p><ng-content select=".body"></ng-content></p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button"><ng-content select=".button"></ng-content></a></p>
    </div>
`
})
export class JumboTronComponent {
}

/* 
      <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>

        Learn more

*/