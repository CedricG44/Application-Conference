import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SessionsService } from "./services/sessions.service";
import { SessionsStoreService } from "./services/sessions-store.service";
import { SpeakersService } from "./services/speakers.service";
import { SpeakersStoreService } from "./services/speakers-store.service";
import { StorageService } from "./services/storage.service";
import { SharedService } from "./services/shared.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: "devfest",
      driverOrder: ["indexeddb", "sqlite", "websql", "localstorage"]
    }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SessionsService,
    SessionsStoreService,
    SpeakersService,
    SpeakersStoreService,
    StorageService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
