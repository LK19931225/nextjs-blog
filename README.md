This is a starter template with pages-router for [Learn Next.js](https://nextjs.org/learn).
# 1.pages router
这个项目是pages router模式，next13之后默认是app router模式
pages router:文件路由
app router:文件夹路由


# 2.代码拆分与预取
在 Next.js 的生产版本中，每当Link组件出现在浏览器视口时，Next.js 会自动预取链接页面的后台代码。当你点击链接时，目标页面的代码已经在后台加载，页面切换几乎是瞬间完成的！

# 3.nextjs做的优化
代码拆分、客户端导航和预取（生产环境中）,使得访问更快更流畅

# 4. SSR与SSG的区别
Next.js有两种预渲染形式：**静态生成**和**服务器端渲染**。区别在于它为页面生成HTML的**时间**。

- **静态生成**是一种预渲染方法，它在**构建时**生成HTML。预渲染的HTML然后在每次请求时被**重用**。

- **服务器端渲染**是一种预渲染方法，它在**每次请求**时生成HTML。

重要的是，Next.js允许你为每个页面**选择**使用哪种预渲染形式。你可以通过为大多数页面使用静态生成，并为其他页面使用服务器端渲染来创建一个“混合”的Next.js应用。