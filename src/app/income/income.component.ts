import { Component, OnInit,ViewChildren,QueryList } from '@angular/core';
import { SavingService } from '../saving.service'
import { FormGroup, FormControl } from '@angular/forms';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  @ViewChildren(ChildComponent) children: QueryList<ChildComponent> | undefined;
 public icomeAmount:any = 0;
 public expensesList:any;
 public expensesAmount:number=0;
 myForm: FormGroup;
  constructor(private service: SavingService) { 
    this.myForm = new FormGroup({
      addIncome: new FormControl(),
    });
  }
  ngAfterViewInit() {
    console.log('------->',this.children?.toArray);
  }
  ngOnInit(): void {
    // console.log('------->',this.children);
    this.icomeAmount = this.service.saveingAmount;
      this.expensesList = this.service.expenses;
    this.service.expenses.map((iteam:any)=>{
      this.expensesAmount  += iteam.expensesAmount;
    })
  }
  onSubmit() {
    console.log(this.myForm.value.addIncome)
    this.service.saveingAmount += this.myForm.value.addIncome;
    this.icomeAmount = this.service.saveingAmount;
  }

}
