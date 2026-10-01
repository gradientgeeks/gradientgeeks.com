import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  readonly activeCommand = signal<'aerostream' | 'sdk'>('aerostream');
  readonly copied = signal<boolean>(false);

  readonly commands = {
    aerostream: 'docker run -d -p 9092:9092 -p 9001:9001 quay.io/gradientgeeks/aerostream:latest',
    sdk: 'go get github.com/gradientgeeks/aerostream-sdk/go'
  };

  selectCommand(type: 'aerostream' | 'sdk'): void {
    this.activeCommand.set(type);
    this.copied.set(false);
  }

  copyCurrentCommand(): void {
    const text = this.commands[this.activeCommand()];
    navigator.clipboard.writeText(text).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }
}
