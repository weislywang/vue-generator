import Index from '@/components/Index'
import Sub1 from '@/components/first/Sub1'
import Sub2 from '@/components/first/Sub2'
import Second from '@/components/second/Index'

const routes = [
    {
        path: '/',
        component: Index,
        redirect:'first/sub1',
        children: [
            {
                path: 'first/sub1',
                component: Sub1
            },
            {
                path: 'first/sub2',
                component: Sub2
            },
            {
                path: 'second',
                component: Second
            },
        ]
    },
]

export default routes;
