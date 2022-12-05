import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { CountryCapitalComponent} from './country.component'


const routes: Routes = [
  { path:'', redirectTo:"/counter", pathMatch:"full"},
  { path: 'counter', component: CounterComponent },
  { path: 'country', component: CountryCapitalComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CountryCapitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
