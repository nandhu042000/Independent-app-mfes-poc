import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './authguard.service';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { HomeworkComponent } from './components/homework/homework.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { StudentsComponent } from './components/students/students.component';
import { TopicsComponent } from './components/topics/topics.component';
import { WorksheetsComponent } from './components/worksheets/worksheets.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'topics', component: TopicsComponent},
  {path:'homework', component: HomeworkComponent},
  {path:'worksheets', component: WorksheetsComponent},
  {path:'students', component: StudentsComponent},
  {path:'contact-us', component: ContactusComponent},
  {path:'log-out', component: LogoutComponent},
  {
    path:"login",
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:9000/remoteEntry.js',
      type: 'module',
      exposedModule: './Module'
    })
    .then(m => m.AppModule)
    
  },
  {path:'teacher/message',
  canActivate:[AuthGaurd] ,
  canActivateChild:[AuthGaurd],
  loadChildren: () => loadRemoteModule({
    remoteEntry: 'http://localhost:3000/remoteEntry.js',
    type: 'module',
    exposedModule: './Module'
  })
  .then(m => m.AppModule)
  },
  {path:'teacher/student',
  canActivate:[AuthGaurd] ,
  canActivateChild:[AuthGaurd],
  loadChildren: () => loadRemoteModule({
    remoteEntry: 'http://localhost:5000/remoteEntry.js',
    type: 'module',
    exposedModule: './Module'
  })
  .then(m => m.AppModule)
  },
  {path:'teacher/my-profile',
  canActivate:[AuthGaurd] ,
  canActivateChild:[AuthGaurd],
  loadChildren: () => loadRemoteModule({
    remoteEntry: 'http://localhost:7000/remoteEntry.js',
    type: 'module',
    exposedModule: './Module'
  })
  .then(m => m.AppModule)
  },
  {path:'teacher/topics',
  canActivate:[AuthGaurd] ,
  canActivateChild:[AuthGaurd],
  loadChildren: () => loadRemoteModule({
    remoteEntry: 'http://localhost:8081/remoteEntry.js',
    type: 'module',
    exposedModule: './Module'
  })
  .then(m => m.TopicModule)
  },
  {path:'teacher/worksheet',
  canActivate:[AuthGaurd] ,
  canActivateChild:[AuthGaurd],
  loadChildren: () => loadRemoteModule({
    remoteEntry: 'http://localhost:8081/remoteEntry.js',
    type: 'module',
    exposedModule: './WorksheetModule'
  })
  .then(m => m.WorksheetModule)
  },
  {path:'teacher/homework',
  canActivate:[AuthGaurd] ,
  canActivateChild:[AuthGaurd],
  loadChildren: () => loadRemoteModule({
    remoteEntry: 'http://localhost:8081/remoteEntry.js',
    type: 'module',
    exposedModule: './HomeWorkModule'
  })
  .then(m => m.HomeworkModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =  [HomeComponent, TopicsComponent, HomeworkComponent, WorksheetsComponent, StudentsComponent]
