import { Deleted, Fire } from 'src/app/components/Alert'
import { TechnicalNotesService } from './../../Services/home/others/technical-notes.service'
import { Component, Input, OnInit } from '@angular/core'
import { BaseService } from 'src/app/Services/base.service'
import { ReloadService } from 'src/app/Services/reload.service'

@Component({
	selector: 'TechnicalNotes',
	templateUrl: './technical-notes.component.html',
	styleUrls: ['./technical-notes.component.scss'],
})
export class TechnicalNotesComponent implements OnInit {
	constructor(private service: TechnicalNotesService, private component: ReloadService) {
		this.component.shouldReload().subscribe(() => {
			this.ngOnInit()
		})
	}

	ngOnInit(): void {
		this.getTechnicalNotes()
	}

	@Input() type = ''

	TechnicalNotes: any = []

	getTechnicalNotes() {
		const service = new BaseService(this.service.http, this.service.url, `type=${this.type}`)
		service.index().subscribe((data: any) => {
			this.TechnicalNotes = data
		})
	}

	removeNote(id: number) {
		Fire('Remove Note?', 'Are you sure you want to remove this data?', 'info', () => {
			this.service.destroy(id).subscribe(() => {
				Deleted()
			})
		})
	}
}
