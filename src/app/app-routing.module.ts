import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {EtudiantComponent} from "../app/components/etudiant/etudiant.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UniversiteComponent } from './components/universite/universite.component';
import {ContratComponent} from "./components/contrat/contrat.component";



const routes: Routes = [
  { path: '', redirectTo: '/etudiant', pathMatch: 'full' },

  { path: 'etudiant', component: EtudiantComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'universite', component: UniversiteComponent },
  { path: 'contrat', component: ContratComponent },


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
