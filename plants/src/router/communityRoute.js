const route = {
    path: '/community',
    component: () => import('../pages/Community'),
    children: [
        {
            path: 'comment',
            component: () => import('../component/Community/comment')
        },
        {
            path: 'message',
            component: () => import('../component/Community/message')
        }
    ]
}
console.log(route)

export default route;