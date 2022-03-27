import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { BannerService } from 'src/app/services/banner/banner.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.page.html',
  styleUrls: ['./add-banner.page.scss'],
})
export class AddBannerPage implements OnInit {

  bannerImage: any;

  constructor(
    public global: GlobalService,
    private bannerService: BannerService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  async preview(event) {
    console.log(event);
    const files = event.target.files;
    if(files.length == 0) return;
    const mimeType = files[0].type;
    if(mimeType.match(/image\/*/) == null) return;
    const file = files[0];
    const filePath = 'banners/' + Date.now() + '_' + file.name;
    try {
      const url = await this.apiService.uploadImage(file, filePath);
      this.bannerImage = url;
    } catch(e) {
      console.log(e);
      this.global.errorToast('Image upload failed');
    }
  }

  async saveBanner() {
    try {
      if(this.bannerImage == '' || !this.bannerImage) return;
      this.global.showLoader();
      const data = {
        banner: this.bannerImage,
        status: 'active'
      };
      await this.bannerService.addBanner(data);
      this.global.hideLoader();
      this.global.successToast('Banner Created!');
    } catch(e) {
      this.global.hideLoader();
      this.global.errorToast();
    }
  }

}
