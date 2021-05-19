import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css'],
})
export class LoadingSpinner {
  /**
   * Tells if the spinner is visible or not.
   */
  @Input() isVisible: boolean = false;
}
