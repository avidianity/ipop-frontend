import { Component, OnInit } from '@angular/core'
import { Fire } from 'src/app/components/Alert'

@Component({
	selector: 'app-mpc-fdc',
	templateUrl: './mpc-fdc.component.html',
	styleUrls: ['./mpc-fdc.component.scss'],
})
export class MpcFdcComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	remove() {
		Fire('Remove Data?', 'Are you sure you want to remove this data?', 'info', () => {})
	}
}
