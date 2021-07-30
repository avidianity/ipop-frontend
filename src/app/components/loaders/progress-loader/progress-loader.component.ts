import { Component, OnInit } from '@angular/core'
import { ReloadService } from 'src/app/Services/reload.service'

@Component({
	selector: 'ProgressLoader',
	templateUrl: './progress-loader.component.html',
	styleUrls: ['./progress-loader.component.scss'],
})
export class ProgressLoaderComponent implements OnInit {
	constructor(private component: ReloadService) {
		this.component.isLoading().subscribe((value: boolean) => {
			this.isLoading = value
		})
	}

	isLoading: boolean = true
	ngOnInit(): void {}
}
