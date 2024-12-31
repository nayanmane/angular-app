import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class SignupComponent {
	signupForm: FormGroup = new FormGroup({
		username: new FormControl(''),
		password1: new FormControl(''),
		password2: new FormControl(''),
		mobile: new FormControl(''),
		email: new FormControl(''),
	})
	public signupFormSubmitted = false;
	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private toastr: ToastrService,
	) { }

	ngOnInit() {
		this.createSignupForm();
	}
	createSignupForm() {
		this.signupForm = this.formBuilder.group({
			username: ['', [Validators.required]],
			password1: ['', [Validators.required]],
			password2: ['', [Validators.required]],
			mobile: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
		})
	}
	get lf() { return this.signupForm.controls; }

}
