import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-field-error-display',
  templateUrl: './field-error-display.component.html'
})
export class FieldErrorDisplayComponent {

  @Input() errorMsg: string | undefined;
  @Input() displayError: boolean | undefined;
}
