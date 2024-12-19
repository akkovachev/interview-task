import { Component, OnInit } from '@angular/core';

import { Brawler } from '../../~core/models';
import { BrawlerService } from '../../~services';

@Component({
	selector: 'app-brawler-create',
	templateUrl: './brawler-create.component.html',
	styleUrls: ['./brawler-create.component.css']
})
export class BrawlerCreateComponent implements OnInit {

	constructor() { }

	ngOnInit() {

	}

	goBack() {

	}

	save(newBrawler: Brawler): void {
	}
}
