import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Facture } from 'app/models/facture.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class FacturesService {
  baseUrl = `${environment.mainUrlAPI}`;
  
  constructor(private http: HttpClient, private formBuilder : FormBuilder) { 
    this.createFormModel()
  }

  formModel : FormGroup

  subject  = new Subject<any>();

  fillFormModel(body){
    this.formModel.patchValue({
      idFacture: body.idFacture,
      nomFacture: body.nomFacture,
      tvaFacture: body.tvaFacture,
      dateCreation: body.dateCreation,
    })
  }

   createFormModel() {
    this.formModel = this.formBuilder.group({
       
        nomFacture: ['', [Validators.required]],
        tvaFacture: ['', [Validators.required]],
     
      dateCreation: [new Date(), [Validators.required]],
    })
  }

  sendSubcription(body: any) {
    this.subject.next(body) 
  }
  
  getSubscription() : Observable<any> {
    return this.subject.asObservable() 
  }

 
  



 

 
getAll():Observable<Facture[]>{
  return this.http.get<Facture[]>(`${this.baseUrl}`);
}

getById(id :number):Observable<Facture>{
  return this.http.get<Facture>(`${this.baseUrl}/${id}`);
}

post(facture:Facture){
  return this.http.post(`${this.baseUrl}`,facture);
}

delete(id :number):Observable<Facture>{
  return this.http.delete<Facture>(`${this.baseUrl}/${id}`);
}
// editById(facture :Facture, body){
//   return this.http.put(`${this.baseUrl}/${facture.idFacture}`,body)
// }
editById(idFacture: number, value): Observable<Object> {
  return this.http.put(`${this.baseUrl}/${idFacture}`, value,httpOptions);
}

}