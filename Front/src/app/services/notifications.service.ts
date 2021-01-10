import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

declare var $: any;


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }
  baseUrl = `${environment.mainUrlAPI}`;
  
  // getAll() {
  //   return this.http.get((`${this.baseUrl}`)/getAll')
  // }

  getById(id: string) {
    return this.http.get(this.baseUrl + '/' + id)
  }

  checkExists(id: string) {
    return this.http.get(this.baseUrl + '/check/' + id)
  }

  createNew(body) {
    return this.http.post(this.baseUrl + '/create', body)
  }

  editById(id: string, body) {
    return this.http.put(this.baseUrl + '/update/' + id, body)
  }

  deleteById(id) {
    return this.http.delete(this.baseUrl + '/delete/' + id)
  }

  showNotification(notificationType,message) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    // const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "notifications",
      message: message

    }, {
      type: notificationType,
      timer: 100,
      placement: {
        from: 'bottom',
        align: 'right'
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }

}
