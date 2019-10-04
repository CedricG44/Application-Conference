import { Component, OnInit } from '@angular/core';
import { Plugins, DeviceInfo, NetworkStatus } from '@capacitor/core';
const { Device, Network } = Plugins;

@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.component.html',
  styleUrls: ['./device-page.component.scss'],
})
export class DevicePageComponent implements OnInit {

  private informations : Promise<DeviceInfo>;
  private network : Promise<NetworkStatus>;

  constructor() {
    this.informations = Device.getInfo();
    this.network = Network.getStatus();
  }

  ngOnInit() { }

}
