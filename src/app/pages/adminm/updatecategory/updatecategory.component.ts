import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.scss']
})
export class UpdatecategoryComponent implements OnInit {

  categoryId: number = 0;

  category: Category = {
    categoryId: 0,
    categoryName: '',
    //published: false
  };
  submitted = false;
  message!: string;

  constructor(private categoryService: CategoryService,
    private router: ActivatedRoute,private route: Router) { }

  ngOnInit() {
    this.categoryId = this.router.snapshot.params['id'];

    this.categoryService.getCategoryById(this.categoryId).subscribe(data => {
      this.category = data;
    }, error => console.log(error));
  }
  //new code
  newCategory(): void {
    this.submitted = false;
    this.category = {
      categoryId: 0,
      categoryName: '',
      //published: false
    };
  }

  updateCategory(): void {
    const data = {
      categoryId: this.category.categoryId,
      categoryName: this.category.categoryName
    };
    this.categoryService.createCategory(data)
    .subscribe({
      next: (result) => {
        console.log(result);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }
  // updateCategory1(categoryId:any): void {
  //   this.message = '';
  //   this.categoryService.getCategorybyId(this.categoryId).subscribe((data: any) => {
  //     this.categoryObj = data;
  //     console.log(this.categoryObj);
  //   });
  //   this.router.navigate(['updatecategory']);
  // }

  // newCategory(): void {
  //   this.submitted = false;
  //   this.category = {
  //     categoryId: 0,
  //     categoryName: '',
  //     //published: false
  //   };
  // }


  gotoCategoryList() {
    //this.router.navigate(['/categorys']);
    this.route.navigate(['/categorys']);
  }
}