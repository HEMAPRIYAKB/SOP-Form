import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient, public toastr:ToastrService) {  }

  userReg(data:any) {
    this.http.post<any>(environment.registerUrl, data).subscribe((res)=>{
      this.toastr.success(res.message);
      this.toastr.info("SOP Generation datas sent to your mail")
      setTimeout(() => {
        window.location.reload();
      }, 7000);
    }, (error) => {
        this.toastr.error(error.error.error);
      });
    }
}
