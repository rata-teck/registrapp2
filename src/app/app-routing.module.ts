import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./portal/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./portal/docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./portal/alumno/alumno.module').then( m => m.AlumnoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
