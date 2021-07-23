import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './pages/login/login.component'
import { HomeComponent } from './pages/home/home.component'
import { HomePageComponent } from './home/home-page/home-page.component'
import { AritclesAndSlidersComponent } from './home/aritcles-and-sliders/aritcles-and-sliders.component'
import { PopulationComponent } from './home/population/population.component'
import { MandateComponent } from './home/about/mandate/mandate.component'
import { OrganizationalChartComponent } from './home/about/organizational-chart/organizational-chart.component'
import { VmgComponent } from './home/about/vmg/vmg.component'
import { CoreValuesComponent } from './home/about/core-values/core-values.component'
import { PersonnelDirectoryComponent } from './home/about/personnel-directory/personnel-directory.component'
import { AwardsComponent } from './home/about/awards/awards.component'
import { ProgramsComponent } from './home/programs/programs.component'
import { ServicesComponent } from './home/services/services.component'
import { BirthDemographicComponent } from './home/demographic/birth-demographic/birth-demographic.component'
import { DeathDemographicComponent } from './home/demographic/death-demographic/death-demographic.component'
import { MigrationsDemographicComponent } from './home/demographic/migrations-demographic/migrations-demographic.component'
import { MarriageDemographicComponent } from './home/demographic/marriage-demographic/marriage-demographic.component'
import { PmocComponent } from './home/rpfp/pmoc/pmoc.component'
import { MpcFdcComponent } from './home/rpfp/mpc-fdc/mpc-fdc.component'
import { TeenCentersComponent } from './home/ahyd/teen-centers/teen-centers.component'
import { IssuesAndConcernsComponent } from './home/ahyd/issues-and-concerns/issues-and-concerns.component'
import { OthersComponent } from './home/others/others.component'
import { RecordUploadComponent } from './modules/records/pages/record-upload/record-upload.component'
import { ViewAdminsComponent } from './modules/admin/pages/view-admins/view-admins.component'
import { AddAdminComponent } from './modules/admin/pages/add-admin/add-admin.component'
import { LogsComponent } from './modules/logs/logs.component'
import { RecordIndexComponent } from './modules/records/pages/record-index/record-index.component'
import { AdminIndexComponent } from './modules/admin/pages/admin-index/admin-index.component'
import { ApprovalsComponent } from './modules/approvals/content/approve-requests/approvals/approvals.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { NoInternetComponent } from './pages/no-internet/no-internet.component'
import { UploadedRecordsComponent } from './modules/records/pages/uploaded-records/uploaded-records.component'
import { ForApprovalRecordsComponent } from './modules/records/pages/for-approval-records/for-approval-records.component'
import { UpdateAccountComponent } from './modules/admin/pages/update-account/update-account.component'
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component'

const routes: Routes = [
	{
		path: '',
		component: LoginComponent,
		data: { animation: 'isRight' },
	},
	{
		path: 'home',
		children: [
			{
				path: '',
				component: HomeComponent,
				data: { animation: 'isRight' },

				children: [
					{
						path: 'index',
						component: HomePageComponent,
						children: [
							{
								path: 'news',
								component: AritclesAndSlidersComponent,
							},
							{
								path: 'population',
								component: PopulationComponent,
							},
							{
								path: 'about',
								children: [
									{
										path: 'ppo-mandate',
										component: MandateComponent,
									},
									{
										path: 'mission-values-and-goals',
										component: VmgComponent,
									},
									{
										path: 'core-values',
										component: CoreValuesComponent,
									},
									{
										path: 'organizational-structure',
										component: OrganizationalChartComponent,
									},
									{
										path: 'personnel-directory',
										component: PersonnelDirectoryComponent,
									},
									{
										path: 'awards',
										component: AwardsComponent,
									},
								],
							},
							{
								path: 'programs/:id',
								component: ProgramsComponent,
							},
							{
								path: 'services/:id',
								component: ServicesComponent,
							},
							{
								path: 'demographic',
								children: [
									{
										path: 'deaths',
										component: DeathDemographicComponent,
									},
									{
										path: 'births',
										component: BirthDemographicComponent,
									},
									{
										path: 'migrations',
										component:
											MigrationsDemographicComponent,
									},
									{
										path: 'marriages',
										component: MarriageDemographicComponent,
									},
								],
							},
							{
								path: 'rpfp',
								children: [
									{ path: 'pmoc', component: PmocComponent },
									{
										path: 'mpcfdc',
										component: MpcFdcComponent,
									},
								],
							},
							{
								path: 'ahyd',
								children: [
									{
										path: 'teen-centers',
										component: TeenCentersComponent,
									},
									{
										path: 'issues-and-concerns',
										component: IssuesAndConcernsComponent,
									},
								],
							},
							{ path: 'others', component: OthersComponent },
						],
					},
					{
						path: 'bulk-records',
						component: RecordIndexComponent,
						children: [
							{ path: '', component: RecordUploadComponent },
							{
								path: 'upload',
								component: RecordUploadComponent,
							},
							{
								path: 'cloud-files',
								component: UploadedRecordsComponent,
							},
							{
								path: 'for-approvals',
								component: ForApprovalRecordsComponent,
							},
						],
					},
					{
						path: 'admins',
						component: AdminIndexComponent,
						children: [
							{ path: '', component: ViewAdminsComponent },
							{ path: 'view', component: ViewAdminsComponent },
							{ path: 'add', component: AddAdminComponent },
						],
					},
					{
						path: 'approvals',
						component: ApprovalsComponent,
					},
					{
						path: 'logs',
						component: LogsComponent,
					},
					{
						path: 'account/:id',
						component: UpdateAccountComponent,
					},
				],
			},
		],
	},
	{ path: 'no-internet', component: NoInternetComponent },
	{ path: 'unauthorized', component: UnauthorizedComponent },
	{ path: '**', component: NotFoundComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
