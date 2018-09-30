import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import { BookmarksListComponent } from "./bookmarks-list.component";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'bookmarks', component: BookmarksListComponent },
  ])],
  exports: [RouterModule]
})
export class BookmarkRoutingModule {

}
