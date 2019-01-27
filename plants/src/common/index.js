import Tabs from './components/tab-bar/Tabs'
import Tab from './components/tab-bar/Tab'
import Scroller from './components/scroller/scroller'
import 'vant/lib/index.css';
import { FetchGet } from './fetch'
import { FetchPost } from './fetch'
import { PullRefresh, Lazyload, Swipe, SwipeItem, Icon } from "vant";
export default {
    install(Vue) {
        Vue.component(Tabs.name, Tabs);
        Vue.component(Tab.name, Tab);
        Vue.component(Scroller.name, Scroller);
        //将这个方法添加到全局
        Vue.prototype.FetchGet = FetchGet;
        Vue.prototype.FetchPost = FetchPost;
        //将vant中字体图标方法添加到全局
        Vue.prototype.Icon = Icon;
        Vue.use(PullRefresh);
        Vue.use(Lazyload)
        Vue.use(Swipe)
        Vue.use(SwipeItem)
    }
}