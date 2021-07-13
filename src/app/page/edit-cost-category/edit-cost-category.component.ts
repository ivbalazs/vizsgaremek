import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CostCategory } from 'app/model/cost-category';
import { CostCategoryService } from 'app/service/cost-category.service';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-edit-cost-category',
  templateUrl: './edit-cost-category.component.html',
  styleUrls: ['./edit-cost-category.component.css']
})
export class EditCostCategoryComponent implements OnInit {

  costCategory: CostCategory = new CostCategory();
  updating: boolean = false;

  chosenCostCategory: CostCategory = new CostCategory();

  entityName: string = 'costCategory';
  list$: BehaviorSubject<CostCategory[]> = new BehaviorSubject<CostCategory[]>([]);

  constructor(
    private costCategoryService: CostCategoryService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.costCategoryService.get(params.id).subscribe((costCategory) => {
        this.costCategory = costCategory || new CostCategory();
      })
    );
    this.chosenCostCategory.id = this.costCategory.id;
  }



  onFormSubmit(form: NgForm): void {
    this.updating = true;
    this.costCategoryService
      .update(this.costCategory)
      .subscribe(() => this.router.navigate(['costcategory']));
  }

  setCostCategoryToDatabase(costCategory: CostCategory): void {
    this.updating = true;
    costCategory.id = Number(costCategory.id);
    if (costCategory.id === 0) {
      this.costCategoryService.create(costCategory).subscribe(
        () => {
          this.toastr.success('Sikeresen módosítottad a költség kategóriát!', 'Módosítva!', {
            timeOut: 3000,
          });
          this.updating = false;
          this.router.navigate(['costcategory']);
        },
        (error) =>
          this.toastr.error('Hiba történt, nem sikerült módosítani a költség kategóriát!', 'Hiba!', {
            timeOut: 3000,
          })
      );
    } else {
      this.costCategoryService.update(costCategory).subscribe(
        () => {
          this.toastr.success('Sikeresen módosítottad a költség kategóriát!', 'Módosítva!', { timeOut: 3000 });
          this.updating = false;
          this.router.navigate(['costcategory']);
        },
        (error) =>
          this.toastr.error('Hiba történt, nem sikerült módosítani a költség kategóriát!', 'Hiba!', { timeOut: 3000 })
      );
    }
  }

}
