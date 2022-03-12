import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component{

  stringcomp ='Konohagakure (木ノ葉隠れの里, \nKonohagakure no Sato, English TV: "Village Hidden in the Leaves" or "Hidden Leaf Village", \nliterally meaning: Village Hidden by Tree Leaves) is the hidden village of the Land of Fire. As the village of one of the Five Great Shinobi Countries, Konohagakure has a Kage as its leader known as the Hokage, of which there have been seven in its history. Konoha resides deep within a forest at the base of a mountain known as the Hokage Rock, which has the faces of all those who have taken the office of Hokage engraved on it.[1] It is surrounded on all sides by enormous walls.[2] While generally seen as the most powerful of the ninja villages,[3] Konoha has enjoyed many years of relative peace and stability.';
gettextcomp(co:string)  {
return co
}

}
