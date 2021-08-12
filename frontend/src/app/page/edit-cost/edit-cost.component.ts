import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cost } from '../../model/cost';
import { CostService } from '../../service/cost.service';
//import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-cost',
  templateUrl: './edit-cost.component.html',
  styleUrls: ['./edit-cost.component.css']
})
export class EditCostComponent implements OnInit {

  cost: Cost = new Cost();
  updating: boolean = false;

  chosenCost: Cost = new Cost();

  entityName: string = 'cost';
  list$: BehaviorSubject<Cost[]> = new BehaviorSubject<Cost[]>([]);

  constructor(
    private costService: CostService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id !== '0') {
        this.costService.get(params.id).subscribe((cost) => {
          this.cost = cost;
        });
      }
    });
    this.chosenCost._id = this.cost._id;
  }


  onFormSubmit(form: NgForm): void {
    this.updating = true;
    if (!this.cost._id) {
      this.costService.create(this.cost).subscribe(
        res => this.router.navigate(['cost'])
      );
    } else {
      this.costService
        .update(this.cost)
        .subscribe(() => this.router.navigate(['cost']));
    }
  }

  setCostToDatabase(cost: Cost): void {
    this.updating = true;
    // cost._id = Number(cost._id);
    if (cost._id === '0') {
      this.costService.create(cost).subscribe(
        () => {
          this.toastr.success('Sikeresen módosítottad a költséget!', 'Módosítva!', {
            timeOut: 3000,
          });
          this.updating = false;
          this.router.navigate(['cost']);
        },
        (error) =>
          this.toastr.error('Hiba történt, nem sikerült módosítani a költséget!', 'Hiba!', {
            timeOut: 3000,
          })
      );
    } else {
      this.costService.update(cost).subscribe(
        () => {
          this.toastr.success('Sikeresen módosítottad a költséget!', 'Módosítva!', { timeOut: 3000 });
          this.updating = false;
          this.router.navigate(['cost']);
        },
        (error) =>
          this.toastr.error('Hiba történt, nem sikerült módosítani a költséget!', 'Hiba!', { timeOut: 3000 })
      );
    }
  }

}
