import { Component, OnInit } from '@angular/core';
import { CostService } from 'app/model/cost-service';
import { CostServiceService } from 'app/service/cost-service.service';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-cost-service',
  templateUrl: './cost-service.component.html',
  styleUrls: ['./cost-service.component.css']
})
export class CostServiceComponent implements OnInit {

  costServiceList$: BehaviorSubject<CostService[]> = this.costServiceService.list$;
  txt: string = '';
  phraseKey: string = '';
  keyArray: string[] = Object.keys(new CostService());

  // sorter
  columnKey: string = '';
  direction: string = '';

  constructor(
    private costServiceService: CostServiceService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.costServiceService.getAll();
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


  onRemove(costService: CostService): void {
    of(this.costServiceService.remove(costService.id)).subscribe(
      () => {
        this.toastr.error('Sikeresen törölted a költség szolgáltatót!', 'Törölve!', { timeOut: 3000 });
        this.costServiceService.getAll();
      },
      error => this.toastr.error('Hiba történt, nem sikerült törölni a költség szolgáltatót!', 'Hiba!', { timeOut: 3000 })
    )

  }

}
