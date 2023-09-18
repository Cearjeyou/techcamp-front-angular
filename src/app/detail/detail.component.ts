import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  detail: any
  location: any
  name: string = ''
  specie: string = ''

  constructor(private apiService: ApiClientService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
        const id = params.get('id')
        // console.log(id)
        if(id !== null) {
          this.apiService.obtenerDetailById(id).subscribe((data) => {
            this.detail = data
            this.location = data.location.name
            const nombre = data.name.split(' ')
            this.name = nombre[nombre.length-1]
            this.specie = data.species
          })
        }
        
      })
  }
}
