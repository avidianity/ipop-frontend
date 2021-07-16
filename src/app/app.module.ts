import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms'
import { IvyCarouselModule } from 'angular-responsive-carousel'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ChartsModule } from 'ng2-charts'
import { GoogleChartsModule } from 'angular-google-charts'

import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login/login.component'
import { HomeComponent } from './pages/home/home.component'
import { NavComponent } from './components/nav/nav.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { HomePageComponent } from './home/home-page/home-page.component'
import { PopulationComponent } from './home/population/population.component'
import { MandateComponent } from './home/about/mandate/mandate.component'
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
import { CpdbRecordsComponent } from './records/cpdb-records/cpdb-records.component'
import { DeathRecordsComponent } from './records/death-records/death-records.component'
import { BirthRecordsComponent } from './records/birth-records/birth-records.component'
import { InMigrationRecordsComponent } from './records/in-migration-records/in-migration-records.component'
import { OutMigrationRecordsComponent } from './records/out-migration-records/out-migration-records.component'
import { RecordUploadComponent } from './records/record-upload/record-upload.component'
import { ViewAdminsComponent } from './admin/view-admins/view-admins.component'
import { AddAdminComponent } from './admin/add-admin/add-admin.component'
import { LogsComponent } from './logs/logs.component'
import { CpdbFormComponent } from './forms/cpdb-form/cpdb-form.component'
import { DeathFormComponent } from './forms/death-form/death-form.component'
import { BirthFormComponent } from './forms/birth-form/birth-form.component'
import { InMigrationFormComponent } from './forms/in-migration-form/in-migration-form.component'
import { OutMigrationFormComponent } from './forms/out-migration-form/out-migration-form.component'
import { MarriagesFormComponent } from './forms/marriages-form/marriages-form.component'
import { RecordIndexComponent } from './records/record-index/record-index.component'
import { AdminIndexComponent } from './admin/admin-index/admin-index.component'
import { MarriageRecordsComponent } from './records/marriage-records/marriage-records.component'
import { AritclesAndSlidersComponent } from './home/aritcles-and-sliders/aritcles-and-sliders.component'
import { OrganizationalChartComponent } from './home/about/organizational-chart/organizational-chart.component'
import { FootersComponent } from './components/shared/footers/footers.component'
import { ApprovalsComponent } from './approvals/approvals.component'
import { SmallComponent } from './components/modal/small/small.component'
import { EditSliderImageComponent } from './home-components/articles-and-sliders/edit-slider-image/edit-slider-image.component'
import { AddArticleComponent } from './home-components/articles-and-sliders/add-article/add-article.component'
import { AddQuickLinksComponent } from './home-components/articles-and-sliders/add-quick-links/add-quick-links.component'
import { TopPopulatedComponent } from './home-components/population/top-populated/top-populated.component'
import { AddPopulationProfileComponent } from './home-components/population/add-population-profile/add-population-profile.component'
import { CustomizePyramidComponent } from './home-components/population/customize-pyramid/customize-pyramid.component'
import { AddOfficialsComponent } from './home-components/population/add-officials/add-officials.component'
import { ViewOfficialsComponent } from './home-components/population/view-officials/view-officials.component'
import { CustomizeTechnicalNotesComponent } from './home-components/population/customize-technical-notes/customize-technical-notes.component'
import { TechnicalNotesComponent } from './home-components/technical-notes/technical-notes.component'
import { AddPersonnelDirectoryComponent } from './home-components/about/add-personnel-directory/add-personnel-directory.component'
import { AddAwardsComponent } from './home-components/about/add-awards/add-awards.component'
import { AddProgramComponent } from './home-components/program/add-program/add-program.component'
import { AddServicesComponent } from './home-components/services/add-services/add-services.component'
import { AddBirthDataComponent } from './home-components/demographic/births/add-birth-data/add-birth-data.component'
import { MonthChartDataComponent } from './home-components/demographic/births/month-chart-data/month-chart-data.component'
import { CustomizeBirthDataComponent } from './home-components/demographic/births/customize-birth-data/customize-birth-data.component'
import { CustomizeTeenageComponent } from './home-components/demographic/births/customize-teenage/customize-teenage.component'
import { CustomizeIllegitimateComponent } from './home-components/demographic/births/customize-illegitimate/customize-illegitimate.component'
import { AddDeathDataComponent } from './home-components/demographic/deaths/add-death-data/add-death-data.component'
import { AddLocalDeathDataComponent } from './home-components/demographic/deaths/add-local-death-data/add-local-death-data.component'
import { AddCrudeDeathRateComponent } from './home-components/demographic/deaths/add-crude-death-rate/add-crude-death-rate.component'
import { AddMigrationDataComponent } from './home-components/demographic/migrations/add-migration-data/add-migration-data.component'
import { AddLocalMigrationDataComponent } from './home-components/demographic/migrations/add-local-migration-data/add-local-migration-data.component'
import { CustomizeMigrationChartComponent } from './home-components/demographic/migrations/customize-migration-chart/customize-migration-chart.component';
import { AddPmocDataComponent } from './home-components/rpfp/pmoc/add-pmoc-data/add-pmoc-data.component';
import { EditPmocDataComponent } from './home-components/rpfp/pmoc/edit-pmoc-data/edit-pmoc-data.component';
import { CustomizeCoupleChartComponent } from './home-components/rpfp/pmoc/customize-couple-chart/customize-couple-chart.component';
import { CustomizeByAgeGroupChartComponent } from './home-components/rpfp/pmoc/customize-by-age-group-chart/customize-by-age-group-chart.component';
import { CustomizeByAgeEmploymentStatusChartComponent } from './home-components/rpfp/pmoc/customize-by-age-employment-status-chart/customize-by-age-employment-status-chart.component';
import { CustomizeByKnowledgeOnFpChartComponent } from './home-components/rpfp/pmoc/customize-by-knowledge-on-fp-chart/customize-by-knowledge-on-fp-chart.component';
import { CustomizeByCivilStatusChartComponent } from './home-components/rpfp/pmoc/customize-by-civil-status-chart/customize-by-civil-status-chart.component';
import { CustomizeByMonthlyIncomeChartComponent } from './home-components/rpfp/pmoc/customize-by-monthly-income-chart/customize-by-monthly-income-chart.component';
import { CustomizePMOCTeamComponent } from './home-components/rpfp/pmoc/customize-pmoc-team/customize-pmoc-team.component';
import { AddMpcFdcDataComponent } from './home-components/rpfp/mpc-fdc/add-mpc-fdc-data/add-mpc-fdc-data.component';
import { AddMpcImagesComponent } from './home-components/rpfp/mpc-fdc/add-mpc-images/add-mpc-images.component';
import { AddMpcFdcTeamComponent } from './home-components/rpfp/mpc-fdc/add-mpc-fdc-team/add-mpc-fdc-team.component';
import { AddPersonnelInchargeComponent } from './home-components/rpfp/mpc-fdc/add-personnel-incharge/add-personnel-incharge.component';
import { ViewPersonnelInchargeComponent } from './home-components/rpfp/mpc-fdc/view-personnel-incharge/view-personnel-incharge.component';
import { ViewMpcFdcTeamComponent } from './home-components/rpfp/mpc-fdc/view-mpc-fdc-team/view-mpc-fdc-team.component';
import { ViewMpcFdcImagesComponent } from './home-components/rpfp/mpc-fdc/view-mpc-fdc-images/view-mpc-fdc-images.component'

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		NavComponent,
		SidebarComponent,
		HomePageComponent,
		PopulationComponent,
		MandateComponent,
		VmgComponent,
		CoreValuesComponent,
		PersonnelDirectoryComponent,
		AwardsComponent,
		ProgramsComponent,
		ServicesComponent,
		BirthDemographicComponent,
		DeathDemographicComponent,
		MigrationsDemographicComponent,
		MarriageDemographicComponent,
		PmocComponent,
		MpcFdcComponent,
		TeenCentersComponent,
		IssuesAndConcernsComponent,
		OthersComponent,
		CpdbRecordsComponent,
		DeathRecordsComponent,
		BirthRecordsComponent,
		InMigrationRecordsComponent,
		OutMigrationRecordsComponent,
		RecordUploadComponent,
		ViewAdminsComponent,
		AddAdminComponent,
		LogsComponent,
		CpdbFormComponent,
		DeathFormComponent,
		BirthFormComponent,
		InMigrationFormComponent,
		OutMigrationFormComponent,
		MarriagesFormComponent,
		RecordIndexComponent,
		AdminIndexComponent,
		MarriageRecordsComponent,
		AritclesAndSlidersComponent,
		OrganizationalChartComponent,
		FootersComponent,
		ApprovalsComponent,
		SmallComponent,
		EditSliderImageComponent,
		AddArticleComponent,
		AddQuickLinksComponent,
		TopPopulatedComponent,
		AddPopulationProfileComponent,
		CustomizePyramidComponent,
		AddOfficialsComponent,
		ViewOfficialsComponent,
		CustomizeTechnicalNotesComponent,
		TechnicalNotesComponent,
		AddPersonnelDirectoryComponent,
		AddAwardsComponent,
		AddProgramComponent,
		AddServicesComponent,
		AddBirthDataComponent,
		MonthChartDataComponent,
		CustomizeBirthDataComponent,
		CustomizeTeenageComponent,
		CustomizeIllegitimateComponent,
		AddDeathDataComponent,
		AddLocalDeathDataComponent,
		AddCrudeDeathRateComponent,
		AddMigrationDataComponent,
		AddLocalMigrationDataComponent,
		CustomizeMigrationChartComponent,
  AddPmocDataComponent,
  EditPmocDataComponent,
  CustomizeCoupleChartComponent,
  CustomizeByAgeGroupChartComponent,
  CustomizeByAgeEmploymentStatusChartComponent,
  CustomizeByKnowledgeOnFpChartComponent,
  CustomizeByCivilStatusChartComponent,
  CustomizeByMonthlyIncomeChartComponent,
  CustomizePMOCTeamComponent,
  AddMpcFdcDataComponent,
  AddMpcImagesComponent,
  AddMpcFdcTeamComponent,
  AddPersonnelInchargeComponent,
  ViewPersonnelInchargeComponent,
  ViewMpcFdcTeamComponent,
  ViewMpcFdcImagesComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		IvyCarouselModule,
		BrowserAnimationsModule,
		ChartsModule,
		GoogleChartsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
