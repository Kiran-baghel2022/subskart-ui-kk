import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent {

  category: Category = {
    categoryId: 0,
    categoryName: '',
    //published: false
  };
  submitted = false;

  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {
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

  saveCategory(): void {
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
deleteEmployee(id: number){
  this.categoryService.deleteCategory(id).subscribe( data => {
    console.log(data);
   // this.getEmployees();
  })
}


  gotoList() {
    this.router.navigate(['/categorys']);
  }
}