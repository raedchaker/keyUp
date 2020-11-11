import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExergueDirective } from './_directive/exergue.directive';
import { ContentComponent } from './content/content/content.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './pipes/image-pipe.pipe';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { ItemComponent } from './components/item/item.component';
import { CvComponent } from './components/cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    ExergueDirective,
    ContentComponent,
    ImagePipe,
    ListComponent,
    DetailComponent,
    ItemComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
