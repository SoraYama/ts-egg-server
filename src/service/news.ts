import { Service } from 'egg';

export default class NewsService extends Service {
  async list(page: number = 1) {
    const { serverUrl, pageSize } = this.config.news;
    const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
      data: {
        orderBy: '"$key"',
        startAt: `"${pageSize * (page - 1)}"`,
        endAt: `"${pageSize * page - 1}"`,
      },
      dataType: 'json',
      enableProxy: true,
      proxy: 'socks://127.0.0.1:1080',
      timeout: 30000
    });

    const newsList = await Promise.all(
      Object.keys(idList).map(key => {
        const url = `${serverUrl}/item/${idList[key]}.json`;
        return this.ctx.curl(url, { dataType: 'json',  enableProxy: true,
        proxy: 'socks://127.0.0.1:1080',
        timeout: 30000 });
      })
    );
    return newsList.map(res => res.data);
  }
}

declare module 'egg' {
  export interface IService {
    news: NewsService;
  }
}
