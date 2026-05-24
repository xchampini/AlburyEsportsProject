import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  public readonly label = input.required<string>();

  public readonly click = output<MouseEvent>();

  protected buttonClicked(event: MouseEvent) {
    this.click.emit(event);
  }
}
