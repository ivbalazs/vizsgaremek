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
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id !== '0') {
        this.costServiceService.get(params.id).subscribe((costService) => {
          this.costService = costService;
        });
      }
    });
    this.chosenCostService._id = this.costService._id;
  }

  onFormSubmit(form: NgForm): void {
    this.updating = true;
    if (!this.costService._id) {
      this.costServiceService.create(this.costService).subscribe(
        () => {
          this.toastr.success('Sikeresen létrehoztad a költség szolgáltatót!', 'Létrehozva!', {
            timeOut: 3000,
          });
          this.router.navigate(['costservice']);
        });
    } else {
      this.costServiceService.update(this.costService).subscribe(
        () => {
          this.toastr.success('Sikeresen módosítottad a költség szolgáltatót!', 'Módosítva!', {
            timeOut: 3000,
          });
          this.router.navigate(['costservice']);
        });
    }
  }



}
