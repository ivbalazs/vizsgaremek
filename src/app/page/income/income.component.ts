import { Component, OnInit } from '@angular/core';
import { Income } from 'app/model/income';
import { IncomeService } from 'app/service/income.service';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  incomeList$: BehaviorSubject<Income[]> = this.incomeService.list$;
  txt: string = '';
  phraseKey: string = '';
  keyArray: string[] = Object.keys(new Income());

  // sorter
  columnKey: string = '';
  direction: string = '';

  constructor(
    private incomeService: IncomeService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.incomeService.getAll();
  }

  // sorter
  onColumnSelect(key: string): void {
    this.swichDirectionValue();
    this.columnKey = key;
  }

  swichDirectionValue(): any {
    if (this.direction === '' || this.direction === 'dsc') {
      return this.direction = 'asc';
    }
    return this.direction = 'dsc';
  }


  onRemove(income: Income): void {
    of(this.incomeService.remove(income.id)).subscribe(
      () => {
        this.toastr.error('Sikeresen törölted a bevételt!', 'Törölve!', { timeOut: 3000 });
        this.incomeService.getAll();
      },
      error => this.toastr.error('Hiba történt, nem sikerült törölni a bevételt!', 'Hiba!', { timeOut: 3000 })
    )
  }

}
