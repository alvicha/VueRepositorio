

export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "index de router" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry', //Mayor control
            component: () => import("@/modules/daybook/view/NoEntrySelected.vue")
        },
        {
            path: ':id',
            name: 'entry-view', //Mayor control
            component: () => import("@/modules/daybook/view/EntryView.vue")
        }
    ]
}