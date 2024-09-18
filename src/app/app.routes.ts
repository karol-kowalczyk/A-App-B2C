import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { OverviewComponent } from './overview/overview.component';



export const routes: Routes = [
    {path: '', component: OverviewComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'navbar', component: NavbarComponent},
];
