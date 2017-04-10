import {Component, Input} from '@angular/core';

@Component({
    selector: 'product',
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object" src="{{ data.imageUrl }}">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    {{ data.productName }}  
                </h4>                
                {{ data.releasedDate | date }} 
                <rating 
                    [rating-value]="data.rating" 
                    [numOfReviews]="data.numOfReviews">
                </rating>
                <div [ngSwitch]="data.rating">
                    <div *ngSwitchCase="1">Poor</div>
                    <div *ngSwitchCase="2">Fair</div>
                    <div *ngSwitchCase="3">Good</div>
                    <div *ngSwitchCase="4">Very Good</div>
                    <div *ngSwitchCase="5">Excellent</div>
                    <div *ngSwitchDefault>Not Rated</div>
	            </div>                
                <br>                                            
                {{ data.description | truncate}}
            </div>
        </div>    
    `,
    styles: [`
        .media {
            margin-bottom: 20px;
        }                       
    `]    
})
export class ProductComponent {
    @Input() data;    
}

// | formatString