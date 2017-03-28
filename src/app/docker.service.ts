import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class DockerService {
	constructor(private http: Http) {
	}

	getItems(url) {
		return this.http.get(url).map((res: Response) => res.json());
	}
}
