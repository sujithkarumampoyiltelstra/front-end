import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private http: Http) {}
	isCollapsed: boolean = true;
	returnedData: any = null;

	onSubmit(f) {
		console.log(f.value);
		this.getData(f).subscribe(response => this.returnedData = response);

	}

	getData(f) {
		return this.http.post('/person', f.value)
			.map(response => response.json());
	}
}
