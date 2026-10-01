import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './philosophy.component.html',
  styleUrl: './philosophy.component.scss'
})
export class PhilosophyComponent {
  readonly pillars = [
    {
      icon: 'memory',
      title: 'Shard-per-Core Architecture',
      tag: 'MECHANICAL SYMPATHY',
      description: 'We pin worker event loops directly to physical CPU cores using libc::sched_setaffinity. Each shard owns its partition subset exclusively, eliminating lock contention, mutex thrashing, and cross-core cache invalidation.'
    },
    {
      icon: 'sync_alt',
      title: 'Zero-Copy Kernel DMA',
      tag: 'I/O PERFORMANCE',
      description: 'Leveraging Linux sendfile(2) system calls, raw log bytes are transferred directly from NVMe disk page caches to network socket buffers via DMA, avoiding double buffering and userspace copies entirely.'
    },
    {
      icon: 'hub',
      title: 'Self-Contained Consensus',
      tag: 'OPERATIONAL SIMPLICITY',
      description: 'Distributed coordination is embedded natively using HashiCorp Raft and BoltDB. No ZooKeeper, no external metadata clusters, and no JVM garbage collection tuning. Sub-150ms leader elections out of the box.'
    },
    {
      icon: 'layers',
      title: 'Cloud-Native Tiered Storage',
      tag: 'STORAGE EFFICIENCY',
      description: 'Transparent offload of sealed log segments to object storage (AWS S3, MinIO, Google Cloud Storage) with local NVMe caching, slashing streaming storage costs by up to 80% while retaining infinite message retention.'
    }
  ];
}
