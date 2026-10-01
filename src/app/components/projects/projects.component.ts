import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';

export interface ProjectItem {
  id: string;
  name: string;
  badge: string;
  badgeType: 'cyan' | 'purple' | 'amber';
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  siteUrl?: string;
  docsUrl?: string;
  dockerUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTabsModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly activeFilter = signal<'all' | 'streaming' | 'security' | 'sdks'>('all');

  readonly projects: ProjectItem[] = [
    {
      id: 'aerostream',
      name: 'AeroStream',
      badge: 'FLAGSHIP • v0.1.0-PREVIEW',
      badgeType: 'cyan',
      tagline: 'High-Throughput, Zero-Dependency Distributed Event Streaming Engine',
      description: 'A dual-engine streaming platform pairing a Rust Shard-per-Core data plane with a Go Raft consensus control plane. Delivers 100% Apache Kafka wire compatibility without the JVM or ZooKeeper.',
      highlights: [
        '100% Apache Kafka wire compatibility (port 9092)',
        'Ultra-low-latency 7-byte native binary protocol (port 9091)',
        'Zero-copy Linux sendfile(2) kernel DMA streaming',
        'Sub-150ms leader elections with embedded Raft consensus',
        'Built-in Confluent-compatible Schema Registry & Kafka Connect REST API',
        'Multi-cloud tiered storage offload to AWS S3, MinIO, and GCS'
      ],
      techStack: ['Rust 1.98', 'Go 1.26', 'Raft', 'mmap', 'sendfile(2)', 'Angular 21'],
      githubUrl: 'https://github.com/gradientgeeks/aerostream',
      siteUrl: 'https://aerostream.gradientgeeks.com',
      docsUrl: 'https://aerostream.gradientgeeks.com/docs/',
      dockerUrl: 'https://quay.io/repository/gradientgeeks/aerostream'
    },
    {
      id: 'aerostream-sdk',
      name: 'AeroStream Client SDKs',
      badge: 'OFFICIAL SDKs',
      badgeType: 'cyan',
      tagline: 'Multi-Language Native Binary Protocol Libraries',
      description: 'Production-ready client libraries for AeroStream\'s 7-byte framing protocol (port 9091) across modern programming languages, delivering sub-millisecond tail latencies with zero Kafka protocol overhead.',
      highlights: [
        'Available in Go, Rust, Java (17+), .NET (C# 8.0+), and Node.js/TypeScript',
        'Zero-allocation binary frame encoding and decoding',
        'Resilient automatic reconnect with exponential backoff and jitter',
        'Continuous streaming iterator interfaces (IAsyncEnumerable, Stream, Channels)'
      ],
      techStack: ['Go', 'Rust', 'Java', 'C# / .NET', 'TypeScript', 'Node.js'],
      githubUrl: 'https://github.com/gradientgeeks/aerostream-sdk',
      docsUrl: 'https://aerostream.gradientgeeks.com/docs/sdks/'
    },
    {
      id: 'aerostream-examples',
      name: 'AeroStream Examples',
      badge: 'ARCHITECTURES & SAMPLES',
      badgeType: 'amber',
      tagline: 'Real-World Reference Implementations & Pipelines',
      description: 'End-to-end applications and multi-language pipelines demonstrating transactional exactly-once semantics, consumer group load balancing, and high-frequency event ingestion against AeroStream.',
      highlights: [
        'FastAPI & Python streaming event consumers and producers',
        'High-speed Go pipelines using franz-go and Sarama',
        'Spring Boot & pure Java Kafka consumer topologies',
        '.NET C# microservices with Confluent.Kafka integration'
      ],
      techStack: ['Python', 'FastAPI', 'Go', 'Java', 'C#', 'Docker Compose'],
      githubUrl: 'https://github.com/gradientgeeks/aerostream-examples'
    }
  ];

  setFilter(filter: 'all' | 'streaming' | 'sdks'): void {
    this.activeFilter.set(filter);
  }

  getFilteredProjects(): ProjectItem[] {
    const f = this.activeFilter();
    if (f === 'all') return this.projects;
    if (f === 'streaming') return this.projects.filter(p => p.id === 'aerostream' || p.id === 'aerostream-examples');
    if (f === 'sdks') return this.projects.filter(p => p.id === 'aerostream-sdk');
    return this.projects;
  }
}
