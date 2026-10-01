import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.scss'
})
export class SponsorsComponent {
  readonly sponsorUrl = 'https://github.com/sponsors/gradientgeeks';

  readonly tiers = [
    {
      name: 'Backer',
      price: '$10 / mo',
      badge: 'COMMUNITY',
      description: 'Support ongoing maintenance and cloud test runner compute.',
      perks: [
        'Sponsor badge on GitHub',
        'Name listed in README and documentation portal',
        'Direct access to community discussions'
      ]
    },
    {
      name: 'Silver Supporter',
      price: '$50 / mo',
      badge: 'POPULAR',
      description: 'Help fund bare-metal NVMe multi-core benchmarking rigs.',
      perks: [
        'All Backer benefits',
        'Logo placed on gradientgeeks.com sponsor section',
        'Priority issue triage and architectural review discussions'
      ]
    },
    {
      name: 'Corporate Sponsor',
      price: '$250+ / mo',
      badge: 'ENTERPRISE',
      description: 'Accelerate enterprise features, zero-copy drivers, and quantum safety.',
      perks: [
        'All Supporter benefits',
        'Prominent corporate logo placement on all repository READMEs',
        'Dedicated advisory sessions on Kafka migrations and PQC IdP deployments'
      ]
    }
  ];
}
