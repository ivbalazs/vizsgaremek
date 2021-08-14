import { Component, OnInit } from '@angular/core';
import { CostService } from 'app/service/cost.service';
import { IncomeService } from 'app/service/income.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sumOfCosts: number = 0;
  sumOfIncomes: number = 0;
  balance: number = 0;

  constructor(
    private costService: CostService,
    private incomeService: IncomeService
  ) { }

  ngOnInit(): void {
    this.costService.list$.subscribe(
      data => {
        this.sumOfCosts = data.map(b => b.sum).reduce((prev, curr) => prev + curr, 0);
      }

    )

    this.incomeService.list$.subscribe(
      data => {
        this.sumOfIncomes = data.map(b => b.sum).reduce((prev, curr) => prev + curr, 0);
        this.balance = this.sumOfIncomes - this.sumOfCosts;
      }

    )

    this.costService.getAll();
    this.incomeService.getAll();

  }
}




