import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  datos: any
  constructor(private apiService: ApiClientService) {}

  ngOnInit(): void {
      this.apiService.obtenerData().subscribe((data) => {
        // console.log(data)
        this.datos = data.results;
      })
  }
}
