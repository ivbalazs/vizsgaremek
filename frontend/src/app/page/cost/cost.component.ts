import { Component, OnInit } from '@angular/core';
import { Cost } from 'app/model/cost';
import { CostService } from 'app/service/cost.service';
import { BehaviorSubject, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent implements OnInit {

  costList$: BehaviorSubject<Cost[]> = this.costService.list$;
  txt: string = '';
  phraseKey: string = '';
  keyArray: string[] = Object.keys(new Cost());

  // sorter
  columnKey: string = '';
  direction: string = '';

  constructor(
    private costService: CostService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.costService.getAll();
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


  onRemove(cost: Cost): void {
    of(this.costService.remove(cost._id)).subscribe(
      () => {
        this.toastr.error('Sikeresen törölted a költséget!', 'Törölve!', { timeOut: 3000 });
        this.costService.getAll();
      },
      error => this.toastr.error('Hiba történt, nem sikerült törölni a költséget!', 'Hiba!', { timeOut: 3000 })
    )
  }
}

