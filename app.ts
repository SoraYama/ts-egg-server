import * as express from 'express';
import mapData from './map-data';
const app = express();

const isInRange = (num: number, a: number, b: number): boolean => num <= Math.max(a, b) && num >= Math.min(a, b)

app.use('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  if (!req.query.ACCESS_KEY || req.query.ACCESS_KEY !== '114514') {
    res.send('YOU ARE NOT 810 SENBAI!');
  }
  // else if (!req.query.timestamp || !isInRange(req.query.timestamp, new Date().getTime() - 5000, new Date().getTime() + 5000)) {
  //   res.send('YOU ARE NOT AT AGE 24!');
  // }
  else {
    next();
  }
})

app.use('/getbardata', (req, res, next) => {
  let dataArr = new Array(7).fill('').map(() => new Array(4).fill('').map(() => (Math.random() * 20 + 1).toFixed(0)));
  res.send(JSON.stringify(dataArr));
})

app.use('/getmapdata', (req, res, next) => {
  mapData.forEach(item => {
    item.risk = Math.round(Math.random() * 100);
    Reflect.deleteProperty(item, 'geo');
  });
  res.send(JSON.stringify(mapData));
})

const department = ['供电', '车辆', '机务', '车务', '工务', '电务', '综合'];

app.use('/getlinedata', (req, res, next) => {
  let data = department.map(item => {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(i => {
      return {
        department: item,
        value: (new Date().getSeconds() % 24 + i) % 24 + (Math.random() - 0.5) * 8,
        time: (new Date().getSeconds() % 24 + i) % 24,
      }
    })
  });
  res.send(JSON.stringify(data));
})

app.use('/getpiedata', (req, res, next) => {
  let data = department.slice(0, -1).map(dep => {
    return new Array(3).fill('').map((i, index) => {
      return {
        rank: index + 1,
        name: dep,
        data: new Array(4).fill('').map(() => Math.ceil(Math.random() * 10))
      }
    })
  })
  res.send(JSON.stringify(data));
})

app.use('/getnews', (req, res) => {
  let data = new Array(10).fill('').map((item, index) => {
    return {
      _id: new Date().getTime().toString() + index,
      time: new Date().getTime(),
      risk: Math.round(Math.random() * 100),
      department: '车间',
      description: 'test alabalabalala',
    }
  })
  res.send(JSON.stringify(data));
})

console.log('server is listening on 8021');
app.listen(8021);
