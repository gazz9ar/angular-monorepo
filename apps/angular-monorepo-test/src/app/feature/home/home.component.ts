import { Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";

const NAME_KEBAB = "app-home";

@Component({
  selector: NAME_KEBAB,
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  @HostBinding("attr.class") class = NAME_KEBAB;
}
