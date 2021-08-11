import { Component, OnInit } from '@angular/core';
import { CostCategory } from 'app/model/cost-category';
import { CostCategoryService } from 'app/service/cost-category.service';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-cost-category',
  templateUrl: './cost-category.component.html',
  styleUrls: ['./cost-category.component.css']
})
export class CostCategoryComponent implements OnInit {

  costCategoryList$: BehaviorSubject<CostCategory[]> = this.costCategoryService.list$;
  txt: string = '';
  phraseKey: string = '';
  keyArray: string[] = Object.keys(new CostCategory());

  // sorter
  columnKey: string = '';
  direction: string = '';

  constructor(
    private costCategoryService: CostCategoryService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.costCategoryService.getAll();
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


  onRemove(costCategory: CostCategory): void {
    of(this.costCategoryService.remove(costCategory.id)).subscribe(
      () => {
        this.toastr.error('Sikeresen törölted a költség kategóriát!', 'Törölve!', { timeOut: 3000 });
        this.costCategoryService.getAll();
      },
      error => this.toastr.error('Hiba történt, nem sikerült törölni a költség kategóriát!', 'Hiba!', { timeOut: 3000 })
    )

  }

}
