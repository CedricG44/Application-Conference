import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "sessions",
    loadChildren: () =>
      import("./sessions/sessions.module").then(m => m.SessionsModule)
  },
  {
    path: "speakers",
    loadChildren: () =>
      import("./speakers/speakers.module").then(m => m.SpeakersModule)
  },
  {
    path: "device",
    loadChildren: () =>
      import("./device/device.module").then(m => m.DeviceModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
