import { Component } from '@angular/core';
import { generalDetails } from './detailsTypes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  details: generalDetails[] =
  [
    {
      header: ["PAT2450G10", "& PAT0413G5"], 
      paragraph: `Using these 2 antennas, you can build a system covering different sectors for bands 433MHz to 1.3GHz (PAT0413G5) and from 2.4GHz to 5.9GHz (PAT2450G10).
                  Each antenna is vertically polarized. The PAT0413G5 gain is in the range of 3.4 – 8.7dBi.
                  On the other hand, the PAT2450G10 gain is 9-10 dBi.`,
      img_num: "1"
    },
    {
      header: "DIRO530G9",
      paragraph: `This is a ruggedized steel directive LPD antenna covering from 500MHz up to 3GHz.
                  The gain and radiation pattern are quite stable within all the operational antenna’s bandwidth.
                  The polarization is linear and by rotating the antenna you can set the polarization to H, V or slant polarization.`,
      img_num: "2"
    },
    {
      header: "PAT0460G10",
      paragraph: `This is a compact microstrip directive LPD antenna covering from 400MHz up to 6GHz.
                  The gain and radiation pattern are quite stable within all the operational antenna’s bandwidth.
                  The polarization is linear and by rotating the antenna you can set the polarization to H, V or slant polarization.
                  The antenna is made up using 2 sub-antennas combined with a diplexer, providing a smooth and uniform response.`,
      img_num: "3"
    },
    {
      header: "PAT0530G12XP",
      paragraph: `This is a compact microstrip directive Vivaldi antenna covering from 500MHz up to 6GHz with a gain of up tuo12 dBi.
                  The polarization is dual linear and by rotating the antenna you can set the polarization to H&V or slant polarization.`,
      img_num: "4_2"
    }
  ];
}
