import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'MunicipalOfficials',
	templateUrl: './approval-municipal-official.component.html',
	styleUrls: ['./approval-municipal-official.component.scss'],
})
export class ApprovalMunicipalOfficialComponent implements OnInit {
	constructor() {}
	@Input() data: any = ''

	ngOnInit(): void {}
}
