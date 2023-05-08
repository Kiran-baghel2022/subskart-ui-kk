
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api.service';
import { CategoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  // implements OnInit {
  categories!: Category[];
  private message!: string;
  categoryObj: any = {
    categoryId: '',
    categoryName: ''
  };
  @Input() viewMode = false;

  @Input() currentCategory: Category = {
    categoryId: 0,
    categoryName: ''
  };
  categoryId: any;

  constructor(private api: ApiService, private router: Router, private categoryService: CategoryService) {
    this.api.getCategories().subscribe((data: any) => {
      this.categories = data;
      console.log(this.categories);
    });
  }
  goToAddCategory() {
    this.router.navigate(['addcategory']);
  }
  //category: Category = new Category();
  // submitted = false;
  // category!: Category ;

  // constructor(private categoryService: CategoryService,
  //   private router: Router) { }

  // updateCategory1(categoryId: any) {

  //   this.router.navigate(['updatecategory']);//, categoryId, categoryName
  //   // 
  // }
  updateCategory(categoryId:any): void {
    this.message = '';
    this.categoryService.showCategorybyId(this.categoryId).subscribe((data: any) => {
      this.categoryObj = data;
      console.log(this.categoryObj);
    });
    this.router.navigate(['updatecategory']);
  }
  // ngOnInit() {
  //   this.reloadData();
  // }

  // reloadData() {
  //   this.categories = this.api.getCategories();
  // }

  deleteCategory(categoryId: number) {
    this.categoryService.deleteCategory(categoryId)
      .subscribe(
        data => {
          console.log(data);
          this.api.getCategories();
        },
        error => console.log(error));
  }
  deleteCategory1(): void {
    this.categoryService.deleteCategory(this.currentCategory.categoryId)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
  }
  // deleteEmployee(id: number){
  //   this.employeeService.deleteEmployee(id).subscribe( data => {
  //     console.log(data);
  //     this.getEmployees();
  //   })
  // }

}