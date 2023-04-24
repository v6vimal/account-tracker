import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SavingService } from '../saving.service'
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  public expensesList:any=[];
  public totalExpenses:number= 0;
  myForm: FormGroup;
  constructor(private service:SavingService) {
    this.myForm = new FormGroup({
      expensesDetails:new FormControl(),
      expensesAmount: new FormControl()
    });
   }

  ngOnInit(): void {
   this.expensesList = this.service.expenses;
    
    
  }
  onSubmit() {
    this.service.expenses.push(this.myForm.value)
    this.totalExpenses = 0;
    this.service.expenses.map((iteam:any)=>{
      this.totalExpenses += iteam.expensesAmount;
    })
  }
}
