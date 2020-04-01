import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-jumbotron',
  template: `
    <div class="jumbotron">
        <h1 class="display-4"><ng-content select=".heading"></ng-content></h1>
        <p class="lead"><ng-content select=".body"></ng-content></p>
        <hr class="my-4">
        <p><ng-content select=".description"></ng-content></p>
        <a class="btn btn-primary btn-lg" href="#" role="button"><ng-content select=".button"></ng-content></a>
    </div>
`
})
export class JumboTronComponent {
}
