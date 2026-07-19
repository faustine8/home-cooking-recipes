import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.BASE_PATH
    ? `${process.env.BASE_PATH.replace(/\/$/, '')}/`
    : '/',
  lang: 'zh-CN',
  title: '家常菜谱',
  description: '记录简单、好用的家常菜做法',
  themeConfig: {
    nav: [{ text: '菜谱', link: '/' }],
    sidebar: [
      {
        text: '牛肉',
        items: [
          { text: '芹菜炒牛肉', link: '/recipes/beef/芹菜炒牛肉/' },
          { text: '红汤萝卜烧牛肉', link: '/recipes/beef/红汤萝卜烧牛肉/' }
        ]
      },
      {
        text: '猪肉',
        items: [{ text: '香辣猪脚', link: '/recipes/pork/香辣猪脚/' }]
      },
      {
        text: '鸡肉',
        items: [{ text: '山药香菇乌鸡汤', link: '/recipes/chicken/山药香菇乌鸡汤/' }]
      },
      {
        text: '鸭肉',
        items: [{ text: '川味香辣啤酒鸭', link: '/recipes/duck/川味香辣啤酒鸭/' }]
      },
      {
        text: '鱼肉',
        items: [{ text: '豆豉鲮鱼油麦菜', link: '/recipes/fish/豆豉鲮鱼油麦菜/' }]
      }
    ]
  }
})
