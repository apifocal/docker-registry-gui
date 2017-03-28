import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { DockerService } from './docker.service';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { TagComponent } from './tag/tag.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'catalog/:id/tags',
    component: TagComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DockerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
