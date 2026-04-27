import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExternalLinks } from '../../app.const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly year = new Date().getFullYear();
  protected readonly externalLinks = ExternalLinks;
}
