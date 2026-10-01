import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface RepoNode {
  name: string;
  repo: string;
  role: string;
  language: string;
  license: string;
  starsUrl: string;
}

@Component({
  selector: 'app-ecosystem',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './ecosystem.component.html',
  styleUrl: './ecosystem.component.scss'
})
export class EcosystemComponent {
  readonly repos: RepoNode[] = [
    {
      name: 'AeroStream Core',
      repo: 'gradientgeeks/aerostream',
      role: 'Dual-engine streaming broker (Rust Shards + Go Raft)',
      language: 'Rust / Go',
      license: 'Apache-2.0',
      starsUrl: 'https://github.com/gradientgeeks/aerostream'
    },
    {
      name: 'AeroStream Native SDKs',
      repo: 'gradientgeeks/aerostream-sdk',
      role: 'Official client libraries for Go, Rust, Java, .NET & Node.js',
      language: 'Polyglot',
      license: 'Apache-2.0',
      starsUrl: 'https://github.com/gradientgeeks/aerostream-sdk'
    },
    {
      name: 'AeroStream Web Console',
      repo: 'gradientgeeks/aerostream-ui',
      role: 'Angular 21 management console for cluster topology, topics & metrics',
      language: 'TypeScript / Angular',
      license: 'Apache-2.0',
      starsUrl: 'https://github.com/gradientgeeks/aerostream-ui'
    },
    {
      name: 'AeroStream Technical Docs',
      repo: 'gradientgeeks/aerostream-docs',
      role: 'MkDocs Material technical portal, LaTeX math & architecture whitepapers',
      language: 'Markdown / Python',
      license: 'Apache-2.0',
      starsUrl: 'https://github.com/gradientgeeks/aerostream-docs'
    },
    {
      name: 'AeroStream Examples',
      repo: 'gradientgeeks/aerostream-examples',
      role: 'Production pipelines in Python, Go, Rust, Java & C#',
      language: 'Multi-Language',
      license: 'Apache-2.0',
      starsUrl: 'https://github.com/gradientgeeks/aerostream-examples'
    },
    {
      name: 'DilithiAuth IdP',
      repo: 'gradientgeeks/dilithiauth',
      role: 'Post-Quantum hybrid IdP combining Ed25519 & NIST FIPS 204 ML-DSA-44',
      language: 'Rust',
      license: 'Apache-2.0',
      starsUrl: 'https://github.com/gradientgeeks/dilithiauth'
    }
  ];
}
