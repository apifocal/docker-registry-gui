import { Component, OnInit } from '@angular/core';
import { DockerService } from '../docker.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {
	private items: any[];

	constructor(private dockerService: DockerService){
	}

	ngOnInit() {
		this.getItems('/api/catalog');
	}

	getItems(url){
		this.dockerService.getItems(url)
        .subscribe(res => {
        	this.items = res.repositories;
            return res;
    	})
	}
}
