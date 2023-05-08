import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SubskartComponent } from './pages/subskart/subskart.component';
import { VenderComponent } from './pages/vendor/vender/vender.component';
import { ItemComponent } from './pages/adminm/item/item.component';
import { AdminComponent } from './pages/adminm/admin/admin.component';
import { CategoryComponent } from './pages/adminm/category/category.component';
import { AddcategoryComponent } from './pages/adminm/addcategory/addcategory.component';
import { AdditemComponent } from './pages/adminm/additem/additem.component';
import { ItemselectionComponent } from './pages/vendor/itemselection/itemselection.component';
import { DetailedreportComponent } from './pages/vendor/detailedreport/detailedreport.component';
import { ItemssummeryComponent } from './pages/vendor/itemssummery/itemssummery.component';
import { TransactionsComponent } from './pages/vendor/transactions/transactions.component';
import { SummeryreportComponent } from './pages/vendor/summeryreport/summeryreport.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { ActivesubascriptionsComponent } from './pages/user/activesubascriptions/activesubascriptions.component';
import { UsertransactionsComponent } from './pages/user/usertransactions/usertransactions.component';
import { GetsubscriptionComponent } from './pages/user/getsubscription/getsubscription.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { AdminlayoutComponent } from './pages/adminm/adminlayout/adminlayout.component';
import { UserlayoutComponent } from './pages/user/userlayout/userlayout.component';
import { VendorlayoutComponent } from './pages/vendor/vendorlayout/vendorlayout.component';
import { UseritemselectComponent } from './pages/user/useritemselect/useritemselect.component';
import { SelecteditemsforpayComponent } from './pages/user/selecteditemsforpay/selecteditemsforpay.component';
import { TestComponent } from './pages/adminm/test/test.component';
import { TestnextComponent } from './pages/adminm/testnext/testnext.component';
import { UpdatecategoryComponent } from './pages/adminm/updatecategory/updatecategory.component';



const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: '', component: LoginpageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'subskart', component: SubskartComponent },
  { path: 'admin', component: AdminComponent },
  //{ path: '**', component: LoginComponent },

  //{ path: 'addcategory', component: AddcategoryComponent },
  //{ path: 'updatecategory', component: UpdatecategoryComponent },




  {
    path: '',
    component: AdminlayoutComponent,
    children: [
      { path: 'category', component: CategoryComponent },
      { path: 'item', component: ItemComponent },
      { path: 'vender', component: VenderComponent },
      { path: 'addcategory', component: AddcategoryComponent },
      { path: 'updatecategory', component: UpdatecategoryComponent },
      { path: 'additem', component: AdditemComponent },
    ]
  },
  {
    path: '',
    component: UserlayoutComponent,
    children: [
      { path: 'userdashboard', component: UserdashboardComponent },
      { path: 'activesubascriptions', component: ActivesubascriptionsComponent },
      { path: 'usertransactions', component: UsertransactionsComponent },
      { path: 'getsubscription', component: GetsubscriptionComponent },
      { path: 'useritemselect', component: UseritemselectComponent },
      { path: 'selecteditemsforpay', component: SelecteditemsforpayComponent },
      { path: 'test', component: TestComponent },
      { path: 'testnext', component: TestnextComponent }

    ]
  },
  {
    path: '',
    component: VendorlayoutComponent,
    children: [
      { path: 'itemselection', component: ItemselectionComponent },
      { path: 'itemssummery', component: ItemssummeryComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'summeryreport', component: SummeryreportComponent },
      { path: 'detailedreport', component: DetailedreportComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
