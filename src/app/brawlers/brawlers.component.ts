import { Component, OnInit } from '@angular/core';

import { Brawler } from '../~core/models';
import { BrawlerService } from '../~services';

@Component({
	selector: 'app-brawlers',
	templateUrl: './brawlers.component.html',
	styleUrls: ['./brawlers.component.css']
})
export class BrawlersComponent implements OnInit {

	constructor() { }

	ngOnInit() {

	}

	delete(brawler: Brawler): void {

	}
}
