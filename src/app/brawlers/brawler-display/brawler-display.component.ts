import { Component, Input } from '@angular/core';

import { Brawler, BrawlerType } from '../../~core/models';

@Component({
	selector: 'app-brawler-display',
	templateUrl: './brawler-display.component.html',
	styleUrls: ['./brawler-display.component.css']
})
export class BrawlerDisplayComponent {
	brawlerTypes = BrawlerType;
}
