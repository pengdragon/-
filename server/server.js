const express = require('express')
//一如mockjs模块
//const Mock = require('mockjs');
//引入Random方法
//const Random = Mock.Random;
//引入mock方法
//const mock = Mock.mock;
//结构赋值引入两个方法
const { Random, mock } = require('mockjs')
const server = express();
server.get('/api/getlocation', (req, res) => {
    let result = mock({
        status: 0,
        message: 'ok',
        data: {
            cityName() {
                let result = Random.city();
                if (result.endsWith('市')) {
                    var arr = result.split('');
                    arr.splice(arr.length - 1, 1);
                    result = arr.join('');
                }
                return result;
            }
        }
    });
    res.json(result);
})

// server.get('/api/home/filmbanner', (req, res) => {
//     let result = mock({
//         message: 'ok',
//         status: 0,
//         data: {
//             'bannerlist|4': [
//                 {
//                     'id|+1': 4123498,
//                     name: '@ctitle',
//                     img: "@image('375x180', '@color', '@name')"
//                 }
//             ]
//         }
//     })
//     res.json(result);
// })

server.get('/api/film/nowplaying/list', (req, res) => {
    let result = mock({
        status: 0,
        message: 'ok',
        data: {
            //创建20个元素
            'playingList|20': [
                {
                    //每一次的id都自增1
                    'id|+1': 13412318,
                    //随机来个名字，而且不会重复
                    name: '@ctitle',
                    //随便来个图片地址而且不会重复，大小固定80*120，颜色随机并且不重复，将name的值也加进来
                    img: "@image('80x120', '@color', '@name')",
                    //评分从0-5.1随机，有可能重复
                    'rate|0-5.1': 0,
                    //
                    'actors|2-10': ['@cname'],
                    'area|1': ['中国', '美国', '英国', '日本', '印度'],
                    'duration|90-150': 0,
                    'type|1': ['2D', '3D']
                }
            ]
        }
    });
    res.json(result);
})

server.listen(9090, 'localhost', (err) => {
    if (err) {
        console.log('后台服务器启动失败');
    }
    else {
        console.log('后台服务器启动成功');
    }

})
