import { Route } from "@angular/router";
import { HomeComponent } from "./feature/home/home.component";

export const appRoutes: Route[] = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "test",
        redirectTo: () => {
            return "home2";
        },
        pathMatch: "full",
    }
];
