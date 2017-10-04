import {RouterModule} from "@angular/router";
import {TaskComponent} from "./tasks/task/task.component";
import {CategoryComponent} from "./categories/category/category.component";
/**
 * Created by f.taleb on 9/3/2017.
 */
const APP_ROUTES_PROVIDER =[


  // { path:'' , redirectTo:'/tasks' ,pathMatch : 'full'} ,
  { path:'tasks' , component: TaskComponent },
  { path:'categories' , component: CategoryComponent },

]
export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDER) ;
