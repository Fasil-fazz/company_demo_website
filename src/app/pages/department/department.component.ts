import { Component } from '@angular/core';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  department=[
    {
      id:1,
      title:"Banking & Finance",
      image:"../../../assets/banking.jpg"
    },

    {
      id:2,
      title:"Aeronotical",
      image:"../../../assets/aeronotic.jpg"
    },

    {
      id:3,
      title:"Healthcare",
      image:"../../../assets/healthcare.jpg"
    },

    {
      id:4,
      title:"GIS",
      image:"../../../assets/gis.jpg"
    },

    {
      id:5,
      title:"Insurance",
      image:"../../../assets/insurance.jpg"
    },

    {
      id:6,
      title:"Mobility",
      image:"../../../assets/mobility.jpg"
    },
  ]
}
