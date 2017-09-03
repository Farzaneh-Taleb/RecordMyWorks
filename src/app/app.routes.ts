import {RouterModule} from "@angular/router";
import {TaskComponent} from "./task/task.component";
/**
 * Created by f.taleb on 9/3/2017.
 */
const APP_ROUTES_PROVIDER =[


  // { path:'' , redirectTo:'/tasks' ,pathMatch : 'full'} ,
  { path:'tasks' , component: TaskComponent }

]
export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDER) ;
