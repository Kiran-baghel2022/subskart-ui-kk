import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

const categoryUrl = 'http://localhost:8082/savecategory';
const saveItemUrl = 'http://localhost:8082/saveitem';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // createCategory(category: Category) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(private http: HttpClient, private auth: AuthService) {

  }

  //new code ng-14
  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(categoryUrl);
  }

  getCategoryById(id: any): Observable<Category> {
    return this.http.get<Category>(`${categoryUrl}/${id}`);
  }

  createCategory(data: any): Observable<any> {
    return this.http.post(categoryUrl, data);
  }

  updateCategorybyId(id: any, data: any): Observable<any> {
    return this.http.put(`${categoryUrl}/${id}`, data);
  }

  deleteCategory(id: any): Observable<any> {
    return this.http.delete(`${categoryUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(categoryUrl);
  }

  findByTitle(title: any): Observable<Category[]> {
    return this.http.get<Category[]>(`${categoryUrl}?title=${title}`);
  }

  createItem(data: any): Observable<any> {
    return this.http.post(categoryUrl, data);
  }
}
