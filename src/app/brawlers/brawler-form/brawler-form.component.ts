import { Component, SimpleChange, OnChanges } from '@angular/core';

import { Brawler, BrawlerType } from '../../~core/models';
import { nameof } from '../../~core/utilities';

@Component({
	selector: 'app-brawler-form',
	templateUrl: './brawler-form.component.html',
	styleUrls: ['./brawler-form.component.css']
})
export class BrawlerFormComponent implements OnChanges {

	brawlerTypes = BrawlerType;


	ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
	}

	onCancel() {
	}

	onSubmit() {
	}
}
