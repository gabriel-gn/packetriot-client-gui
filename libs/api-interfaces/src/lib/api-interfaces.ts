export interface PacketriotMonitor {
  port: number;
}

export interface PacketriotHttps {
  domain: string;
  secure: boolean;
  destination: string;
  port: number;
  tls: number;
  useLetsEnc: boolean;
  redirect: boolean;
  upstreamURL: string;
}

export interface PacketriotPort {
  port: number;
  destination: string;
  dstPort: number;
}

export interface PacketriotConfig {
  version: string;
  key: string;
  hostname: string;
  serverKey: string;
  serverHost: string;
  monitor: PacketriotMonitor;
  https?: PacketriotHttps[];
  ports?: PacketriotPort[];
}
