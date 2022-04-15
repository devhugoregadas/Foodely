import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _profile = new BehaviorSubject<User>(null);

  get profile() {
    return this._profile.asObservable();
  }

  constructor(
    private authService: AuthService, 
    private apiService: ApiService
  ) { }

  async getProfile() {
    try {
      const uid = await this.authService.getId();
      let profile: User;
      const docSnap: any = await this.apiService.getDocById(`users/${uid}`);
      if(docSnap?.exists()) {
        profile = docSnap.data();
      } else {
        throw('No such document exists');
      }
      const data = new User(
        profile.email,
        profile.phone,
        profile.name,
        uid,
        profile.type,
        profile.status
      );
      this._profile.next(data); 
      return data;
    } catch(e) {
      throw(e);
    }
  }

  async updateProfile(profile, param) {
    try {
      const uid = await this.authService.getId();
      const result = await this.apiService.updateDocument(`users/${uid}`, param);
      const data = new User(
        param.email,
        param.phone,
        profile.name,
        profile.uid,
        profile.type,
        profile.status
      );
      this._profile.next(data);
      return data;
    } catch(e) {
      throw(e);
    }
  }

  async updateProfileWithEmail(profile, param, password) {
    try {
      await this.authService.updateEmail(profile.email, param.email, password);
      await this.updateProfile(profile, param);
      return profile;
    } catch(e) {
      throw(e);
    }
  }

}
