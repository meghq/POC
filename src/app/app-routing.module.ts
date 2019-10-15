import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Member1Component } from './member1/member1.component';
import { Member2Component } from './member2/member2.component';
import { Member3Component } from './member3/member3.component';

const routes: Routes = [

  {
    path:"member1",
    component:Member1Component
  },

  {
    path:"member2",
    component:Member2Component
  },

  {
    path:"member3",
    component:Member3Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
