import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public title:string = "Ruby Brunton";
  public home:boolean = true;
  public writer:boolean = false;
  public editor:boolean = false;
  public poet:boolean = false;
  public performer:boolean = false;
  public about:boolean = false;
  public resume:boolean = false;
  public contact:boolean = false;
  public notFound:boolean = false;
  public sub;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {
    console.log("message from sidenav");
  }

  ngOnInit(): void {
    this.getHero();
    this.sub = this.route
      .data
      .subscribe(v => {
        console.log("subscription called!", v);
        this.toggle(v.toggleTo)
      });
  }

  getHero(): void {
    let tester = this.route.snapshot;
    console.log("tester:", tester);
    //const id = +this.route.snapshot.paramMap.get('id');
    //this.toggle(id);
  }

  toggle(selection){
    console.log("toggle called with:", selection);
    if(selection == "home"){
      this.home = true;
    }
    else{
      this.home = false;
    }

    if(selection == "writer"){
      this.writer = true;
    }
    else{
      this.writer = false;
    }

    if(selection == "editor"){
      this.editor = true;
    }
    else{
      this.editor = false;
    }

    if(selection == "poet"){
      this.poet = true;
    }
    else{
      this.poet = false;
    }

    if(selection == "performer"){
      this.performer = true;
    }
    else{
      this.performer = false;
    }

    if(selection == "about"){
      this.about = true;
    }
    else{
      this.about = false;
    }

    if(selection == "resume"){
      this.resume = true;
    }
    else{
      this.resume = false;
    }

    if(selection == "contact"){
      this.contact = true;
    }
    else{
      this.contact = false;
    }

    if(selection == "notFound"){
      this.notFound = true;
    }
    else{
      this.notFound = false;
    }
  }

  showHome(){
    this.toggle("home");
  }
  showWriter(){
    this.toggle("writer");
  }
  showEditor(){
    this.toggle("editor");
  }
  showPoet(){
    this.toggle("poet");
  }
  showPerformer(){
    this.toggle("performer");
  }
  showAbout(){
    this.toggle("about");
  }
  showResume(){
    this.toggle("resume");
  }
  showContact(){
    this.toggle("contact");
  }

}
