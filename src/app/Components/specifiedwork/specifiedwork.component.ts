import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reference } from '../Models/reference';
import { Resource } from '../Models/resource';
import { WorksserviceService } from '../worksservice.service';

@Component({
  selector: 'app-specifiedwork',
  templateUrl: './specifiedwork.component.html',
  styleUrls: ['./specifiedwork.component.css'],
})
export class SpecifiedworkComponent implements OnInit {
  constructor(
    private workservice: WorksserviceService,
    private route: ActivatedRoute
  ) {}

  dataspec: Reference = {
    "publisher": '',
    "URL": '',
    'container-title': '',
    "subject":'',
    "volume":'',
    "title":''
  };

  data:any=[]

  resource:Resource={
    "URL":''
  }


  //consume api with service and get specified data through doi parameter receive with url
  getSpecifiedWorkData() {
    const doi = this.route.snapshot.paramMap.get('doi');
    this.workservice.getSpecifiedWork(doi).subscribe((data: any) => {
      //get all specifieddata
      this.dataspec = data.message;

      //validate author
      if(data.message.author){
        this.data=data.message.author
      }
      else{
        this.data=undefined

      }

      //validate volume
      if(!this.dataspec.volume){
        this.dataspec.volume=""
      }

      //get specified url
      this.resource=data.message.resource.primary

      //validate subject
      if(!this.dataspec.subject){
        this.dataspec.subject=this.dataspec.title
      }
    });
  }

  ngOnInit(): void {
    this.getSpecifiedWorkData();
  }
}
