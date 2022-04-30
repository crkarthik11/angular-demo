import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';


const routes: Routes = [
      {
       path: 'register',
       component: RegisterComponent 
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'students',
        component: StudentsComponent
      },
      {
        path: 'books',
        component: BookComponent
      },
      {
      path: 'admin',
      component: AdminComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
