import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income/income.component'
import { ExpensesComponent } from './expenses/expenses.component'

const routes: Routes = [
  { path: 'income', component: IncomeComponent },
  { path: 'expense', component: ExpensesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
