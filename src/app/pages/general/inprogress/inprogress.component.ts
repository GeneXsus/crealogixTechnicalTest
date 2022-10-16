import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-inprogress',
	templateUrl: './inprogress.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./inprogress.component.css']
})
export class InprogressComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
