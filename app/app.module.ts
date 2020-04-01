import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarComponent }   from './star.component';
import { StarFillComponent }   from './starfill.component';
import { RatingComponent }   from './rating.component';

import { ProductComponent } from './product.component';
import { ProductsComponent } from './products.component';

import { TruncatePipe } from './truncate.pipe';
import { JumboTronComponent } from './jumbotron.component';


@NgModule({
  declarations: [
    AppComponent,StarComponent,StarFillComponent,RatingComponent,ProductComponent,ProductsComponent, TruncatePipe, JumboTronComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
