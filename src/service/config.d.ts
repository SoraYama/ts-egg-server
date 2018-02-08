import * as egg from 'egg'

declare module 'egg' {
  export interface EggAppConfig {
    news: {
      serverUrl: string;
      pageSize: number;
    }
  }
}
