import axios from 'axios'
import { Toast } from 'mint-ui';

export async function FetchGet(url, params = {}) {
    let response = await axios.get(url, {
        params
    })
    /*如果await后面的异步请求成功，
    则获取异步请求返回参数并赋值给变量response,继续往下执行
    如果await后面的异步请求失败，则什么都不返回也不往下执行*/
    if (response.data.status === 1) {
        Toast({
            message: '请求错误',
            duration: 1000
        });
        return response.data.data
    } else if (response.data.status === 0) {
        // console.log(response.data.data)
        return response.data.data;
    }
}
export async function FetchPost(url, params = {}) {
    let response = await axios.post(url, {
        params
    })
    if (response.data.status === 1) {
        Toast({
            message: '请求错误',
            duration: 1000
        });
    } else if (response.data.status === 0) {
        return response.data.data;
    }
}
/*----------------promese形式的get如下------------------*/
// export function FetchGet(url,params={}){
// return new Promise((resolve, reject) => {
//     axios.get(url, {
//         params
//     })
//         .then(response => {


//             if (response.data.status) {
//                 Toast({
//                     message: '请求错误',
//                     duration: 1000
//                 });
//             }
//             else {
//                 //请求数据成功
//                 resolve(response.data.data);
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             Toast({
//                 message: '请求错误',
//                 duration: 1000
//             });
//         })
// })
// }



/*--------------- *promese的post请求如下-----------------*/
//export function FetchPost(url,params={}){
    // axios.post(url, params)
    //     .then(response => {
    //         if (response.data.status) {
    //             Toast({
    //                 message: '请求错误',
    //                 duration: 1000
    //             });
    //         }
    //         else {
    //             //请求数据成功
    //         }
    //     })
    //     .catch(error => {
    //         Toast({
    //             message: '请求错误',
    //             duration: 1000
    //         });
    //     })
//}