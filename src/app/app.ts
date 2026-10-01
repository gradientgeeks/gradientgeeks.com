import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from './services/seo.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PhilosophyComponent } from './components/philosophy/philosophy.component';
import { EcosystemComponent } from './components/ecosystem/ecosystem.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    PhilosophyComponent,
    EcosystemComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.initDefaultMeta();
  }
}

