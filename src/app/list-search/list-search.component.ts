import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.css']
})
export class ListSearchComponent {
  data: any

  constructor(private apiService: ApiClientService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
        console.log(params.keys)
        if(params.has('name') && params.has('specie')){
          const name = params.get('name')
          const specie = params.get('specie')
          if(name !== null && specie !== null){
            const spec = `name=${name}&species=${specie}`
            this.apiService.obtenerDetailSearch(spec).subscribe((dato) => {
              console.log(dato)
              this.data = dato.results;
            })
          } 
        } else if(params.has('name')) {
          const name = params.get('name')
          console.log(name)
          if(name !== null){
            const spec = `name=${name}`
            this.apiService.obtenerDetailSearch(spec).subscribe((dato) => {
              this.data = dato.results;
            })
          } 
        } else {
          const specie = params.get('specie')
          if(specie !== null){
            const spec = `species=${specie}`
            this.apiService.obtenerDetailSearch(spec).subscribe((dato) => {
              this.data = dato.results;
            })
          }
        }
      })
  }
}
