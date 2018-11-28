import {Component} from "@angular/core"

@Component({
   selector : 'add-text-button',
   templateUrl : './addTextButton.component.html',
  styles: [`
    .white-text{
         color: white;
    }
  `]
})

export class AddTextButtonComponent{
    displayInfo = true;
    // count = 1;
    clickButtonLog = [];

    changeDisplayInfo(){
      this.displayInfo = !this.displayInfo;
      // this.clickButtonLog.push(this.count++);
      this.clickButtonLog.push(this.clickButtonLog.length+1);
    }

    getBColor(){
      if(this.clickButtonLog.length > 5){
        return "blue";
      }
    }
  getColor(){
    if(this.clickButtonLog.length > 5){
      return "white";
    }
  }

  onToggleDetails(){
    this.displayInfo = !this.displayInfo;
    this.clickButtonLog.push(new Date());
  }

}
