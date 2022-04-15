import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
// import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
// import { finalize } from 'rxjs/operators';
import { Category } from 'src/app/models/category.model';
import { Item } from 'src/app/models/item.model';
import { Restaurant } from 'src/app/models/restaurant.model';
import { ApiService } from 'src/app/services/api/api.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.page.html',
  styleUrls: ['./add-menu-item.page.scss'],
})
export class AddMenuItemPage implements OnInit {

  @ViewChild('filePicker', {static: false}) filePickerRef: ElementRef;
  restaurants: Restaurant[] = [];
  categories: Category[] = [];
  image: any;
  isLoading: boolean = false;
  veg = true;
  status = true;
  imageFile: any;
  category: any;
  quantity: number = 0;

  @Input() item: Item;
  @Input() index: any;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() minus: EventEmitter<any> = new EventEmitter();

  constructor(
    public global: GlobalService,
    public apiService: ApiService,
    // private afStorage: AngularFireStorage,
    private restaurantService: RestaurantService,
    private categoryService: CategoryService,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.getRestaurants();
  }

  async getRestaurants() {
    try {
      this.global.showLoader();
      this.restaurants = await this.restaurantService.getRestaurants();
      this.global.hideLoader();
    } catch(e) {
      this.global.hideLoader();
      this.global.errorToast();
    }
  }

  async changeRestaurant(event) {
    try {
      this.global.showLoader();
      this.categories = await this.categoryService.getRestaurantCategories(event.detail.value);
      this.category = '';
      this.global.hideLoader();
    } catch(e) {
      this.global.hideLoader();
      this.global.errorToast();
    }

  }

  async onSubmit(form: NgForm) {
    if(!form.valid || !this.image) return;
    try {
      this.isLoading = true;
      const url = await this.uploadImage(this.imageFile);    
      if(!url) {
        this.isLoading = false;
        this.global.errorToast('Image not uploaded, please try again');
        return;
      }
      const data = {
        cover: url,
        veg: this.veg,
        status: this.status,
        quantity: this.quantity,
        ...form.value
      };    
      await this.menuService.addMenuItem(data);
      this.isLoading = false;
      this.global.successToast('Menu Item Added Successfully');
    } catch(e) {
      this.isLoading = false;
      this.global.errorToast();
    }
  }

  quantityPlus() {
    this.add.emit(this.index);
  }

  quantityMinus() {
    this.minus.emit(this.index);
  }

  changeImage() {
    this.filePickerRef.nativeElement.click();
  }

  onFileChosen(event) {
    const file = event.target.files[0];
    if(!file) return;
    this.imageFile = file;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result.toString();
      this.image = dataUrl;
    };
    reader.readAsDataURL(file);
  }

  async uploadImage(imageFile) {
    try {
      const mimeType = imageFile.type;
      if(mimeType.match(/image\/*/) == null) return;
      const file = imageFile;
      const filePath = 'menu/' + Date.now() + '_' + file.name;
      const url = await this.apiService.uploadImage(file, filePath);
      return url;
    } catch(e) {
      this.global.errorToast('Image upload failed');
    }
  }

}
