import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `  
  <bs-jumbotron>
    <div class="heading">
      Hello World!
    </div>    
    <div class="body">
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
    </div>
    <div class="description">
      It uses utility classes for typography and spacing to space content out within the larger container.
    </div>    
    <div class="button">
      Learn more
    </div>      
  </bs-jumbotron> 
  `
})
export class AppComponent {
}
