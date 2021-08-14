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
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id !== '0') {
        this.costCategoryService.get(params.id).subscribe((costCategory) => {
          this.costCategory = costCategory;
        });
      }
    });
    this.chosenCostCategory._id = this.costCategory._id;
  }

  onFormSubmit(form: NgForm): void {
    this.updating = true;
    if (!this.costCategory._id) {
      this.costCategoryService.create(this.costCategory).subscribe(
        () => {
          this.toastr.success('Sikeresen létrehoztad a költség kategóriát!', 'Létrehozva!', {
            timeOut: 3000,
          });
          this.router.navigate(['costcategory']);
        });
    } else {
      this.costCategoryService.update(this.costCategory).subscribe(
        () => {
          this.toastr.success('Sikeresen módosítottad a költség kategóriát!', 'Módosítva!', {
            timeOut: 3000,
          });
          this.router.navigate(['costcategory']);
        });
    }
  }




}
