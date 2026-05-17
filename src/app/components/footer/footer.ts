import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExternalLinks } from '../../app.const';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faDiscord, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  imports: [FaIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly year = new Date().getFullYear();
  protected readonly externalLinks = ExternalLinks;

  // TODO: Move these icons to a shared icons file if we end up using them in more places
  // Potentially, we can put it in the same spot as the ExternalLinks, but it might be better to have a separate Icons file that exports all icons used in the app
  facebookIcon = faFacebook;
  discordIcon = faDiscord;
  instagramIcon = faInstagram;
}
