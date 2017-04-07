import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DockerService } from '../docker.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
	public name: string = '';
	public items: any[] = [];

	constructor(
		private route: ActivatedRoute,
  		private router: Router,
  		private dockerService: DockerService
	) {
	}

	ngOnInit() {
		this.getItems('/api/tags/' + this.route.snapshot.params['id'] + '');
	}

	getItems(url){
		this.dockerService.getItems(url)
	    .subscribe(res => {
	    	this.name = res.name;
	    	this.items = res.tags;

	        return res;
		})
	}
}
