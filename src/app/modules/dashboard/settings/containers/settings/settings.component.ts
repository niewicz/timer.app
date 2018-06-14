import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TakeUntilDestroy } from 'angular2-take-until-destroy';

import { AuthSelectors } from '../../../../auth/shared/auth.selectors';
import { AuthDispatchers } from '../../../../auth/shared/auth.dispatchers';
import { takeUntil } from 'rxjs/operator/takeUntil';
import { IUser } from '../../../../auth/shared/auth.interfaces';
import * as moment from 'moment-timezone';

@Component({
  selector: 'timer-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
@TakeUntilDestroy
export class SettingsComponent implements OnInit, OnDestroy {
  componentDestroy;

  currentUser$ = this.authSelectors.getCurrentUser();

  timeZones = moment.tz.names();

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    personName: ['', [Validators.required]],
    companyName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    accountOwner: '',
    iban: '',
    swiftCode: '',
    currency: '',
  });

  constructor(
    private fb: FormBuilder,
    private authSelectors: AuthSelectors,
    private authDispatchers: AuthDispatchers,
  ) {}

  ngOnInit(): void {
    this.authDispatchers.getCurrentUser();

    this.currentUser$
      .takeUntil(this.componentDestroy())
      .subscribe((user: IUser) => {
        if (user && user.billingProfile) {
          this.form.patchValue(user.billingProfile);
        } else if (user) {
          this.form.patchValue({
            email: user.email,
          });
        }
      });
  }

  ngOnDestroy(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      this.authDispatchers.updateBillingProfile(this.form.value);
    }
  }

  onSelectTimezone(timezone: string): void {
    this.authDispatchers.setTimezone(timezone);
  }
}
