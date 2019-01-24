import Tabs from './components/tab-bar/Tabs'
import Tab from './components/tab-bar/Tab'
import Scroller from './components/scroller/scroller'
import { Icon } from 'vant';
import { FetchGet } from './fetch'
import { FetchPost } from './fetch'
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
        Vue.use(Icon);

    }
}