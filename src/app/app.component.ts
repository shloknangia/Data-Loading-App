import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { getViewData } from '../../node_modules/@angular/core/src/render3/instructions';
import { DataserviceService } from './dataservice.service';
import { Photos, PhotosObj } from './_modal';
//import * as config from '../config';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Data Loading App';
  products = [];
  length;
  pages;
  isLengthReceived: boolean = false;

  wellList = [];


  
 //title = 'app';  
  myPhotosList: Photos[] = [];  
  page: number = 1;  

  constructor(private httpClient:HttpClient, private service: DataserviceService){}
  ngOnInit(){
    //this.fetchData();
    //this.getPhotos();  
    this.getWells();
    
    
  }
  
 fetchData() {
  this.httpClient.get('http://localhost:59010/api/wells/getlengthwells').toPromise()
  .then(
    (res:Response) => {
      console.log(res);
      
      /*console.log(data);
      this.length = data;
      this.isLengthReceived = true;
      this.pages = Math.ceil(this.length/18);
      console.log(this.pages);
      console.log(data.status);*/
      
      //this.two(data);
      //for(var i=1;i<=this.pages;i++){
        //this.getData(1);
      //}
    });
 }

 getData(p: number) {
  
  this.httpClient.get('http://localhost:59010/api/wells/getwellsbypage/' + p).toPromise()
  .then(
    (data:any) => {
      console.log(data);
      if(data){
        if(data.status == 200){
          this.getData(p+1);
        }
        else{
          return;
        }
      }
      /*console.log(data);
      if(data.Message == 'Not Found' )return;
      else
        this.getData(p+1);*/
    });
 }



 
 // To get image data from api  
 //getPhotos() {  
  getWells(){
   console.log(this.page);  
   this.service.getMyData(this.page).subscribe((res) => this.onSuccess(res));  
 }  
 
 // When we got data on a success  
 onSuccess(res) {  
   console.log(res);  
   if (res != undefined) {  
     res.forEach(item => {  
       //this.myPhotosList.push(new PhotosObj(item));  
       this.wellList.push(item);
     });  
   }  
 }  
 
 // When scroll down the screen  
 onScroll()  
 {  
   console.log("Scrolled");  
   this.page = this.page + 1;  
   //this.getPhotos();  
   this.getWells();
 }  
}
