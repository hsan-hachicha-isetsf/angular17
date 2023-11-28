import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseurl="http://localhost:3001/api/articles/"

  constructor(private http:HttpClient) { }
  
  getallArticles():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseurl)

  }
  createArticle(prod:Product):Observable<Product>{
  return this.http.post(this.baseurl,prod)
  }
  deleteArticle(id:object){
    return this.http.delete(this.baseurl  + id)
  }
  getarticle(id:object):Observable<Product>{
    return this.http.get(this.baseurl + id)
  }
  updatearticle(_id:object, prod:Product): Observable<any> {
    return this.http.put(this.baseurl + _id,prod)
    
  }
}
