import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExergueDirective } from './_directive/exergue.directive';
import { ContentComponent } from './content/content/content.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './pipes/image-pipe.pipe';
import { ListComponent } from './cv/list/list.component';
import { DetailComponent } from './cv/detail/detail.component';
import { ItemComponent } from './cv/item/item.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';

@NgModule({
  declarations: [
    AppComponent,
    ExergueDirective,
    ContentComponent,
    ImagePipe,
    ListComponent,
    DetailComponent,
    ItemComponent,
    CvComponent,
    TodoComponent,
    HomeComponent,
    NavbarComponent,
    EmbaucheComponent
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
