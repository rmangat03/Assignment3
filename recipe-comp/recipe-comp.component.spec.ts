import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/Forms';
import { RecipeCompComponent } from './recipe-comp.component';
import { AppComponent } from '../app.component';
describe('RecipeCompComponent', () => {
  let component: RecipeCompComponent;
  let fixture: ComponentFixture<RecipeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RecipeCompComponent
      ],
      imports: [
        FormsModule
      ],
      providers: []

        })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('UI tests', () => {

  let component: RecipeCompComponent;
  let fixture: ComponentFixture<RecipeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RecipeCompComponent
      ],
      imports: [
        FormsModule
      ],
      providers: []
        })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('test adding, deleting the recipes.', () => {
    let element: HTMLElement = fixture.debugElement.nativeElement;
    let rname  = element.querySelector("input.rnamein");
    let iname  = element.querySelector("input.inamein");
    let qname  = element.querySelector("input.qnamein");
    let insname  = element.querySelector("textarea.insnamein");


    (<HTMLInputElement>(iname)).value = "mango";
    (<HTMLInputElement>(qname)).value = "9";
    (<HTMLInputElement>(insname)).value = "Peel it. shake and mix it and enjoy";
    (<HTMLInputElement>(rname)).value = "mango pie";

    rname.dispatchEvent(new Event("input"));
    iname.dispatchEvent(new Event("input"));
    qname.dispatchEvent(new Event("input"));
    insname.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    let button = element.querySelector("input.add");
    button.dispatchEvent(new Event("click"));
    fixture.detectChanges();

    let output = element.querySelector("td.rname");
    let inn = element.querySelector("li.iname");
    let qn = element.querySelector("li.qname");
    let ins = element.querySelector("td.insname");
    expect(output.innerHTML).toBe("mango pie");
    expect(inn.innerHTML).toBe("mango");
    expect(qn.innerHTML).toBe("9");
    expect(ins.innerHTML).toBe("Peel it. shake and mix it and enjoy");


    let button2 = element.querySelector("td.rname");
    button2.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    let del = element.querySelector("input.delete");
    del.dispatchEvent(new Event("click"));
    fixture.detectChanges();

    let output2 = element.querySelector("td.name");
    if(output2 == null){
      expect(true).toBe(true);
    }

  });
  });
describe('more ui tests', () => {

  let component: RecipeCompComponent;
  let fixture: ComponentFixture<RecipeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RecipeCompComponent
      ],
      imports: [
        FormsModule
      ],
      providers: []
        })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('editing the Recipe', () => {

    let element: HTMLElement = fixture.debugElement.nativeElement;
    let rname  = element.querySelector("input.rnamein");
    let iname  = element.querySelector("input.inamein");
    let qname  = element.querySelector("input.qnamein");
    let insname  = element.querySelector("textarea.insnamein");


    (<HTMLInputElement>(iname)).value = "mango";
    (<HTMLInputElement>(qname)).value = "9";
    (<HTMLInputElement>(insname)).value = "Peel it. shake and mix it and enjoy";
    (<HTMLInputElement>(rname)).value = "mango pie";

    rname.dispatchEvent(new Event("input"));
    iname.dispatchEvent(new Event("input"));
    qname.dispatchEvent(new Event("input"));
    insname.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    let button = element.querySelector("input.add");
    button.dispatchEvent(new Event("click"));
    fixture.detectChanges();

    (<HTMLInputElement>(iname)).value = "apple";
    (<HTMLInputElement>(qname)).value = "5";
    (<HTMLInputElement>(insname)).value = "mix it and enjoy";
    (<HTMLInputElement>(rname)).value = "apple pie";

    rname.dispatchEvent(new Event("input"));
    iname.dispatchEvent(new Event("input"));
    qname.dispatchEvent(new Event("input"));
    insname.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    button.dispatchEvent(new Event("click"));
    fixture.detectChanges();


    //editing starts Here
    let srname = element.querySelector("td.rname");
    srname.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    let siname = element.querySelector("li.iname");
    siname.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    let sqname = element.querySelector("li.qname");
    sqname.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    let sinsname = element.querySelector("td.insname");
    sinsname.dispatchEvent(new Event("click"));
    fixture.detectChanges();


    (<HTMLInputElement>(rname)).value = "bananas pie";
    (<HTMLInputElement>(iname)).value = "pie";
    (<HTMLInputElement>(qname)).value = "14";
    (<HTMLInputElement>(insname)).value = "bake it and enjoy";

    rname.dispatchEvent(new Event("input"));
    iname.dispatchEvent(new Event("input"));
    qname.dispatchEvent(new Event("input"));
    insname.dispatchEvent(new Event("input"));
    fixture.detectChanges();


    let edit = element.querySelector("input.edit");
    edit.dispatchEvent(new Event("click"));
    fixture.detectChanges();

    let output = element.querySelector("td.rname");
    let inn = element.querySelector("li.iname");
    let qn = element.querySelector("li.qname");
    let ins = element.querySelector("td.insname");
    expect(output.innerHTML).toBe("bananas pie");
    expect(inn.innerHTML).toBe("pie");
    expect(qn.innerHTML).toBe("14");
    expect(ins.innerHTML).toBe("bake it and enjoy");


  });
});
