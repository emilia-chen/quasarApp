
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/ajaxBar1',
    component: () => import('pages/AjaxBar.vue')
  },
  {
    name: 'avatar',
    path: '/avatar',
    component: () => import('pages/Avatar.vue')
  },
  {
    name: 'badge',
    path: '/badge',
    component: () => import('pages/Badge.vue'),
    children: []
  },
  {
    name: 'banner',
    path: '/banner',
    component: () => import('pages/Banner.vue')
  },
  {
    name: 'bar',
    path: '/bar',
    component: () => import('pages/Bar.vue')
  },
  {
    name: 'breadcrumbs',
    path: '/breadcrumbs',
    component: () => import('pages/Breadcrumbs.vue')
  },
  {
    name: 'buttons',
    path: '/buttons',
    component: () => import('pages/Buttons.vue')
  },
  {
    name: 'card',
    path: '/card',
    component: () => import('pages/Card.vue')
  },
  {
    name: 'carousel',
    path: '/carousel',
    component: () => import('pages/Carousel.vue')
  },
  {
    name: 'chatMessage',
    path: '/chatMessage',
    component: () => import('pages/ChatMessage.vue')
  },
  {
    name: 'chip',
    path: '/chip',
    component: () => import('pages/Chip.vue')
  },
  {
    name: 'circularProgress',
    path: '/circularProgress',
    component: () => import('pages/CircularProgress.vue')
  },
  {
    name: 'colorPicker',
    path: '/colorPicker',
    component: () => import('pages/ColorPicker.vue')
  },
  {
    name: 'dialog',
    path: '/dialog',
    component: () => import('pages/Dialog.vue')
  },
  {
    name: 'editor',
    path: '/editor',
    component: () => import('pages/Editor.vue')
  },
  {
    name: 'expansionItem',
    path: '/expansionItem',
    component: () => import('pages/ExpansionItem.vue')
  },
  {
    name: 'formComponents',
    path: '/formComponents',
    component: () => import('pages/FormComponents.vue')
  },
  {
    name: 'inputTextfield',
    path: '/inputTextfield',
    component: () => import('pages/InputTextfield.vue')
  },
  {
    name: 'select',
    path: '/select',
    component: () => import('pages/Select.vue')
  },
  {
    name: 'radio',
    path: '/radio',
    component: () => import('pages/Radio.vue')
  },
  {
    name: 'checkbox',
    path: '/checkbox',
    component: () => import('pages/Checkbox.vue')
  },
  {
    name: 'toggle',
    path: '/toggle',
    component: () => import('pages/Toggle.vue')
  },
  {
    name: 'buttonToggle',
    path: '/buttonToggle',
    component: () => import('pages/ButtonToggle.vue')
  },
  {
    name: 'optionGroup',
    path: '/optionGroup',
    component: () => import('pages/OptionGroup.vue')
  },
  {
    name: 'slider',
    path: '/slider',
    component: () => import('pages/Slider.vue')
  },
  {
    name: 'range',
    path: '/range',
    component: () => import('pages/Range.vue')
  },
  {
    name: 'timePicker',
    path: '/timePicker',
    component: () => import('pages/TimePicker.vue')
  },
  {
    name: 'datePicker',
    path: '/datePicker',
    component: () => import('pages/DatePicker.vue')
  },
  {
    name: 'icon',
    path: '/icon',
    component: () => import('pages/Icon.vue')
  },
  {
    name: 'img',
    path: '/img',
    component: () => import('pages/Img.vue')
  },
  {
    name: 'infiniteScroll',
    path: '/infiniteScroll',
    component: () => import('pages/InfiniteScroll.vue')
  },
  {
    name: 'innerLoading',
    path: '/innerLoading',
    component: () => import('pages/InnerLoading.vue')
  },
  {
    name: 'knob',
    path: '/knob',
    component: () => import('pages/Knob.vue')
  },
  {
    name: 'linearProgress',
    path: '/linearProgress',
    component: () => import('pages/LinearProgress.vue')
  },
  {
    name: 'markupTable',
    path: '/markupTable',
    component: () => import('pages/markupTable.vue')
  },
  {
    name: 'menu',
    path: '/menu',
    component: () => import('pages/Menu.vue')
  },
  {
    name: 'noSSR',
    path: '/noSSR',
    component: () => import('pages/NoSSR.vue')
  },
  {
    name: 'observers',
    path: '/observers',
    component: () => import('pages/Observers.vue')
  },
  {
    name: 'pagination',
    path: '/pagination',
    component: () => import('pages/Pagination.vue')
  },
  {
    name: 'parallax',
    path: '/parallax',
    component: () => import('pages/Parallax.vue')
  },
  {
    name: 'popupEdit',
    path: '/popupEdit',
    component: () => import('pages/PopupEdit.vue')
  },
  {
    name: 'popupProxy',
    path: '/popupProxy',
    component: () => import('pages/PopupProxy.vue')
  },
  {
    name: 'pullToRefresh',
    path: '/pullToRefresh',
    component: () => import('pages/PullToRefresh.vue')
  },
  {
    name: 'rating',
    path: '/rating',
    component: () => import('pages/Rating.vue')
  },
  {
    name: 'scrollArea',
    path: '/scrollArea',
    component: () => import('pages/ScrollArea.vue')
  },
  {
    name: 'separator',
    path: '/separator',
    component: () => import('pages/Separator.vue')
  },
  {
    name: 'slideItem',
    path: '/slideItem',
    component: () => import('pages/SlideItem.vue')
  },
  {
    name: 'slideTransition',
    path: '/slideTransition',
    component: () => import('pages/SlideTransition.vue')
  },
  {
    name: 'space',
    path: '/space',
    component: () => import('pages/Space.vue')
  },
  {
    name: 'spinners',
    path: '/spinners',
    component: () => import('pages/Spinners.vue')
  },
  {
    name: 'splitter',
    path: '/splitter',
    component: () => import('pages/Splitter.vue')
  },
  {
    name: 'stepper',
    path: '/stepper',
    component: () => import('pages/Stepper.vue')
  },
  {
    name: 'table',
    path: '/table',
    component: () => import('pages/Table.vue')
  },
  {
    name: 'tabs',
    path: '/tabs',
    component: () => import('pages/Tabs.vue')
  },
  {
    name: 'tabPanels',
    path: '/tabPanels',
    component: () => import('pages/TabPanels.vue')
  },
  {
    name: 'timeline',
    path: '/timeline',
    component: () => import('pages/Timeline.vue')
  },
  {
    name: 'toolbar',
    path: '/toolbar',
    component: () => import('pages/Toolbar.vue')
  },
  {
    name: 'tooltip',
    path: '/tooltip',
    component: () => import('pages/Tooltip.vue')
  },
  {
    name: 'tree',
    path: '/tree',
    component: () => import('pages/Tree.vue')
  },
  {
    name: 'uploader',
    path: '/uploader',
    component: () => import('pages/Uploader.vue')
  },
  {
    name: 'video',
    path: '/video',
    component: () => import('pages/Video.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
