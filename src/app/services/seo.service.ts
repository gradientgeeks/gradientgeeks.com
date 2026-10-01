import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  private readonly defaultTitle = 'Gradient Geeks | High-Performance Distributed Systems & Event Streaming';
  private readonly defaultDescription = 'Gradient Geeks builds open-source high-performance distributed systems, ultra-low-latency event streaming (AeroStream), and zero-copy data infrastructure.';
  private readonly defaultKeywords = 'Gradient Geeks, distributed systems, event streaming, kafka alternative, rust, golang, aerostream, zero-copy, shard-per-core, tiered storage, mechanical sympathy';
  private readonly defaultUrl = 'https://gradientgeeks.com';
  private readonly defaultImage = 'https://gradientgeeks.com/assets/logo.png';

  initDefaultMeta(): void {
    this.updateMeta({});
  }

  updateMeta(config: SeoConfig): void {
    const title = config.title || this.defaultTitle;
    const description = config.description || this.defaultDescription;
    const keywords = config.keywords || this.defaultKeywords;
    const url = config.url || this.defaultUrl;
    const image = config.image || this.defaultImage;

    this.titleService.setTitle(title);

    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'author', content: 'Gradient Geeks' });

    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:site_name', content: 'Gradient Geeks' });

    // Twitter / X
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:site', content: '@gradientgeeks' });
    this.metaService.updateTag({ name: 'twitter:creator', content: '@gradientgeeks' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });
  }
}
