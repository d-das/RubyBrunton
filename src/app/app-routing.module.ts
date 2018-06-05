import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  { path: 'contact', component: SideNavComponent, data: {toggleTo : 'contact'}},
  { path: 'editor', component: SideNavComponent, data: {toggleTo : 'editor'}},
  { path: 'performer', component: SideNavComponent, data: {toggleTo : 'performer'}},
  { path: 'poet', component: SideNavComponent, data: {toggleTo : 'poet'}},
  { path: 'resume', component: SideNavComponent, data: {toggleTo : 'resume'}},
  { path: 'writer', component: SideNavComponent, data: {toggleTo : 'writer'}},
  { path: 'about', component: SideNavComponent, data: {toggleTo: 'about'}},
  { path: 'home', component: SideNavComponent, data: {toggleTo: 'home'}},
  { path: '**', component: SideNavComponent, data: {toggleTo: 'notFound'}},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
