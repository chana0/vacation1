// html



//  <div class="mx-auto" style="width: 200px;">
//    <div class="form-group">
//     <!-- <img src="{{ItemsService.Src}}{{newItem.Picture}}}"> -->
//     <label for="pic" class="control-lable">תמונה:</label><br>
//      <input type="file" name="pic" id="file-input" class="form-control" #Image [(ngModel)]="newItem.picture"
//       (change)="handleFileInput($event.target.files)" placeholder="בחר תמונה">
  
//     </div>
//  </div>
  
// ts




// import { Component, Injectable, OnInit } from '@angular/core';
// import { ItemsServiceService } from 'src/app/service/items-service.service';
// import { Image } from 'src/app/classes/image';

// @Component({
//   selector: 'app-new-homeowner',
//   templateUrl: './new-homeowner.component.html',
//   styleUrls: ['./new-homeowner.component.css']
// })
// export class NewHomeownerComponent implements OnInit {

//   newItem:Image;
//   constructor(private ItemsService: ItemsServiceService) {
//     this.newItem=new Image();
//    }

//   ngOnInit(): void {

//   }
//   handleFileInput(file) {
//     this.ItemsService.uploadImage(file[0]).subscribe(
//       data => {
//        this.newItem.Picture = file[0].name;
//       }
//     );
//   }
  
// }



// Service.ts



// import { Injectable } from '@angular/core';
// import { th } from 'date-fns/locale';
// import { Image } from '../classes/image';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// @Injectable()
// export class ItemsServiceService {
//  url:string="localhost:44339";
//   constructor(private http:HttpClient) { }
// uploadImage(image)
// {
//   const formData:FormData=new FormData();
// formData.append('Image',image,image.name);
// return this.http.post(this.url+"UploadImage",formData);
// }
// }
