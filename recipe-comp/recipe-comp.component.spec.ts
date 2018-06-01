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

describe('UI tests', () => {

  it('test adding multiple recipes and instructions', () => {
    let element: HTMLElement = fixture.debugElement.nativeElement;
    let inputs  = element.querySelectorAll(".field");
    expect(inputs.length).toBe(4);

    (<HTMLInputElement>(inputs[0])).value = "mango pie";
    (<HTMLInputElement>(inputs[1])).value = "mango";
    (<HTMLInputElement>(inputs[2])).value = "9";
    (<HTMLInputElement>(inputs[3])).value = "Peel it. shake and mix it and enjoy";

    let button = element.querySelector(".add");
    button.dispatchEvent(new Event("click"));
    fixture.detectChanges();

    let output = element.querySelector("td.rname");
    let inn = element.querySelector("li.iname");
    let qn = element.querySelector("li.qname");
    let ins = element.querySelector("td.insname");
    // console.log(output.innerHTML);
    expect(output.innerHTML).toBe("mango pie");
    expect(inn.innerHTML).toBe("mango");
    expect(qn.innerHTML).toBe("9");
    expect(ins.innerHTML).toBe("Peel it. shake and mix it and enjoy");

  });

  it('deleting the recipe', () => {
    let element: HTMLElement = fixture.debugElement.nativeElement;

    let button = element.querySelector("td.rname");
    button.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    let del = element.querySelector("input.delete");
    del.dispatchEvent(new Event("click"));
    fixture.detectChanges();

    let output = element.querySelector("td.name");
    if(output == null){
      expect(true).toBe(true);
    }

  });
});
});
