import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component'; 
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildCComponent } from './child-c/child-c.component';
import { ChildDComponent } from './child-d/child-d.component';


export const routes: Routes = [
    {   
        path: 'first-component', 
        component: FirstComponent, 
        children: [
            { path: 'child-a', title: 'child-a', component: ChildAComponent },
            { path: 'child-b', title: 'child-b', component: ChildBComponent }
        ]
    },
    { 
        path: 'second-component',
        component: SecondComponent, 
        children: [
            { 
                path: 'child-c', 
                title: 'child-c', 
                component: ChildCComponent,
                children:  [
                    { path:  'child-d', title: 'child-d', component: ChildDComponent }
                ]
            }
        ]
    },
    { path: '',   redirectTo: '/first-component', pathMatch: 'full' }
];