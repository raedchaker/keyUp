import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo/todo.component';
import { ContentComponent } from './content/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';

const routes: Routes = [
  {
    path: 'directive-exercice',
    component: ContentComponent
  },
  {
    path:'cv',
    component: CvComponent
  },
  {
    path:'todo',
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
