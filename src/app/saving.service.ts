import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavingService {

  constructor() { }
  public saveingAmount:Number = 700000;
  public expenses:any = []
}
