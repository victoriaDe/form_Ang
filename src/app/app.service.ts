import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  postData(name: string, code: string, phone: number, comment: string) {

    const body = JSON.stringify({name: name, phone: code + phone, comment: comment});
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post('https://api2vnext.doktornarabote.ru/api/v1/FeedBack/callBack', body, httpOptions)
      .subscribe(
        (data) => {
          console.info(data);
        },
        (error) => {
          console.error(error);
        },
        () => {
          console.info("Request was completed");
        }
      );
  }
}
