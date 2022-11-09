import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorksserviceService } from '../worksservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private workservice:WorksserviceService,private router:Router) { }

  works:any[]|undefined


  //consume api with service and get all data
  getWorks(){
    this.workservice.getWorks().subscribe((data:any)=>{
      this.works=data.message.items
      this.works?.forEach(item=>{
        if(!item.title){
          item.title="Dont Have Article"
        }
      })
    })
  }

  //short loading time because the page sometimes takes time to bring the data
  public load:boolean=false
  ngOnInit(): void {
    this.getWorks()
  }

}
