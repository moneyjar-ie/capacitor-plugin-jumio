import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'world.moneyjar.sample',
  appName: 'sampleApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
