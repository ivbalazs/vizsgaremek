import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CostServiceService } from 'app/service/cost-service.service';
import { CostService } from 'app/model/cost-service';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-edit-cost-service',
  templateUrl: './edit-cost-service.component.html',
  styleUrls: ['./edit-cost-service.component.css']
})
export class EditCostServiceComponent implements OnInit {

  costService: CostService = new CostService();
  updating: boolean = false;

  chosenCostService: CostService = new CostService();

  entityName: string = 'costService';
  list$: BehaviorSubject<CostService[]> = new BehaviorSubject<CostService[]>([]);

  constructor(
    private costServiceService: CostServiceService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.costServiceService.get(params.id).subscribe((costService) => {
        this.costService = costService || new CostService();
      })
    );
    this.chosenCostService.id = this.costService.id;
  }



  onFormSubmit(form: NgForm): void {
    this.updating = true;
    this.costServiceService
      .update(this.costService)
      .subscribe(() => this.router.navigate(['costservice']));
  }

  setCostServiceToDatabase(costService: CostService): void {
    this.updating = true;
    costService.id = Number(costService.id);
    if (costService.id === 0) {
      this.costServiceService.create(costService).subscribe(
        () => {
          this.toastr.success('Sikeresen módosítottad a költség szolgáltatót!', 'Módosítva!', {
            timeOut: 3000,
          });
          this.updating = false;
          this.router.navigate(['costservice']);
        },
        (error) =>
          this.toastr.error('Hiba történt, nem sikerült módosítani a költség szolgáltatót!', 'Hiba!', {
            timeOut: 3000,
          })
      );
    } else {
      this.costServiceService.update(costService).subscribe(
        () => {
          this.toastr.success('Sikeresen módosítottad a költség szolgáltatót!', 'Módosítva!', { timeOut: 3000 });
          this.updating = false;
          this.router.navigate(['costservice']);
        },
        (error) =>
          this.toastr.error('Hiba történt, nem sikerült módosítani a költség szolgáltatót!', 'Hiba!', { timeOut: 3000 })
      );
    }
  }

}
