import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Income } from 'app/model/income';
import { IncomeService } from 'app/service/income.service';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-edit-income',
  templateUrl: './edit-income.component.html',
  styleUrls: ['./edit-income.component.css']
})
export class EditIncomeComponent implements OnInit {


  income: Income = new Income();
  updating: boolean = false;

  chosenIncome: Income = new Income();

  entityName: string = 'income';
  list$: BehaviorSubject<Income[]> = new BehaviorSubject<Income[]>([]);

  constructor(
    private incomeService: IncomeService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id !== '0') {
        this.incomeService.get(params.id).subscribe((income) => {
          this.income = income;
        });
      }
    });
    this.chosenIncome._id = this.income._id;
  }

  onFormSubmit(form: NgForm): void {
    this.updating = true;
    if (!this.income._id) {
      this.incomeService.create(this.income).subscribe(
        res => this.router.navigate(['income'])
      );
    } else {
      this.incomeService
        .update(this.income)
        .subscribe(() => this.router.navigate(['income']));
    }
  }

  setIncomeToDatabase(income: Income): void {
    this.updating = true;
    // income._id = Number(income._id);
    if (income._id === '0') {
      this.incomeService.create(income).subscribe(
        () => {
          this.toastr.success('Sikeresen módosítottad a bevételt!', 'Módosítva!', {
            timeOut: 3000,
          });
          this.updating = false;
          this.router.navigate(['income']);
        },
        (error) =>
          this.toastr.error('Hiba történt, nem sikerült módosítani a bevételt!', 'Hiba!', {
            timeOut: 3000,
          })
      );
    } else {
      this.incomeService.update(income).subscribe(
        () => {
          this.toastr.success('Sikeresen módosítottad a bevételt!', 'Módosítva!', { timeOut: 3000 });
          this.updating = false;
          this.router.navigate(['income']);
        },
        (error) =>
          this.toastr.error('Hiba történt, nem sikerült módosítani a bevételt!', 'Hiba!', { timeOut: 3000 })
      );
    }
  }

}