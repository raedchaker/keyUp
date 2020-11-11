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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
