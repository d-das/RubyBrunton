import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { WriterComponent } from './writer/writer.component';
import { EditorComponent } from './editor/editor.component';
import { PoetComponent } from './poet/poet.component';
import { PerformerComponent } from './performer/performer.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    WriterComponent,
    EditorComponent,
    PoetComponent,
    PerformerComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
