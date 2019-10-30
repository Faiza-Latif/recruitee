import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'interviews', pathMatch: 'full' },
  { path: 'interviews',
    children: [
      {
        path: '',
        loadChildren: './interviews/interviews.module#InterviewsPageModule'
      },
      { path: ':companyName',
      loadChildren: './interviews/history/history.module#HistoryPageModule' },

    ]},
  { path: 'creation-page', loadChildren: './creation-page/creation-page.module#CreationPagePageModule' },
  { path: 'new-interview', loadChildren: './new-interview/new-interview.module#NewInterviewPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
