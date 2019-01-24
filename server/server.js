const express = require('express')
//一如mockjs模块
//const Mock = require('mockjs');
//引入Random方法
//const Random = Mock.Random;
//引入mock方法
//const mock = Mock.mock;
//结构赋值引入两个方法
/*后台的假数据下面有三个案例，并且都写了注释，研究一哈根据需求进行获取 */
const { Random, mock } = require('mockjs')
const server = express();
server.get('/api/getlocation', (req, res) => {
    let result = mock({
        status: 0,
        message: 'ok',
        data: {
            cityName() {
                //随机获取一个城市，对这个城市进行数据处理
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

server.get('/api/home/filmbanner', (req, res) => {
    let result = mock({
        message: 'ok',
        status: 0,
        data: {
            //创建一个数组，数组里有四个对象
            'bannerlist|4': [
                {
                    //获取id 从第二个对象开始，id都在第一个对象上的id加1
                    'id|+1': 4123498,
                    //随机获取标题
                    name: '@ctitle',
                    //随机获取图片，大小固定，颜色随机 在地址后面加上name
                    img: "@image('375x180', '@color', '@name')"
                }
            ]
        }
    })
    res.json(result);
})

server.get('/api/film/nowplaying/list', (req, res) => {
    let result = mock({
        status: 0,
        message: 'ok',
        data: {
            //创建20个元素，每个元素是一个对象
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
                    //随机获取两个名字放在数组里
                    'actors|2-10': ['@cname'],
                    //随机获取数组里面的一个元素
                    'area|1': ['中国', '美国', '英国', '日本', '印度'],
                    //90-150之间获取随机数
                    'duration|90-150': 0,
                    //随机获取数组里的一个元素
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
