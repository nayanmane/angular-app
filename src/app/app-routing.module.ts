import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', pathMatch: 'full', redirectTo: 'auth' },
			{ path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
			{ path: '**', redirectTo: '/notfound' },
		], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}