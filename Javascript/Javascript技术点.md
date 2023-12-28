DOM   文档对象模型， 定义了一套操作HTML文档的API
BOM   浏览器对象模型，定义了一套操作浏览器窗口的API

#事件循环
js里面任务分为同步和异步，因为js只是单线程，只能同时单个执行。所以同步任务会按顺序依次执行，执行完毕后再实时检查任务队列中是否有等待执行的异步任务。
异步任务会推给浏览器处理，比如点击事件和延时函数。当用户点击或延时函数时间到达后就推入任务队列中。js会实时检查任务队列中的异步任务并依次执行。
# location对象 
location(地址)它拆分并保存了 URL 地址的各个组成部分， 它是一个对象
    href    属性，获取完整的 URL 地址，赋值时用于地址的跳转
    search  属性，获取地址中携带的参数，符号 ？后面部分
    ash 属性，获取地址中的啥希值，得到 # 后面的地址
    reload()    方法，用来刷新当前页面，传入参数 true 时表示强制刷新ctrl+f5
# navigator对象
navigator是对象，该对象下记录了浏览器自身的相关信息。常用属性和方法：通过 userAgent 检测浏览器的版本及平台
// 检测 userAgent（浏览器信息）
(function () {
  const userAgent = navigator.userAgent
  // 验证是否为Android或iPhone
  const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
  const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
  // 如果是Android或iPhone，则跳转至移动站点
  if (android || iphone) {
    location.href = 'http://m.itcast.cn'
  }})();
# histroy对象
history (历史)是对象，主要管理历史记录， 该对象与浏览器地址栏的操作相对应，如前进、后退等
    forward()   前进
    back()  后退
    go(1)   前进一个页面，负数后退
# 本地存储，将数据存储在本地浏览器中
1、页面刷新或者关闭不丢失数据，实现数据持久化
2、容量较大，sessionStorage和 localStorage 约 5M 左右
3、因为存储的只能是字符串，可以把数据转成json字符串存入。使用JSON.stringify(str)
    localStorage：数据可以长期保留在本地浏览器中，刷新页面和关闭页面，数据也不会丢失。以键值对的形式存储，并且存储的是字符串， 省略了window
        存储：localStorage.setItem(key,value)
        获取：localStorage.getItem(key)
        删除：localStorage.removeItem(key)
    sessionStorage：数当页面浏览器被关闭时，存储在 sessionStorage 的数据会被清除。以键值对的形式存储，并且存储的是字符串， 省略了window
        存储、获取、删除与localStorage一样

#常用变量：
    const：在不改变值的前提下优先使用(数组新增删数组内容也可以使用)
    let：需要改变值的情况下使用

#获取DOM对象
1. querySelector('')   满足条件的第一个元素
2. querySelectorAll('')  满足条件的元素集合 返回伪数组
    可以是标签名('div') 、id('#id') 、class('.class') 、name('[name=inputname]')或('input[inputname]')
3. 了解其他方式
   1. getElementById
   2. getElementsByTagName
   3. getElementsByClass

#获取BOM对象进行修改样式
列如：
    const box = document.querySelector('.类名')
    box.style.width = '300px'
#获取BOM对象进行重新赋值类名
1.由于class是关键字, 所以使用className去代替
2.className是使用新值换旧值, 如果需要添加一个类,需要保留之前的类名
    const box = document.querySelector('.intro') 
    box.className = 'pink'
3.通过 classList 操作类控制CSS
为了解决className 容易覆盖以前的类名，我们可以通过classList方式追加和删除类名
    let box = document.querySelector('div')
    box.classList.add('active') 追加
    box.classList.remove('one') 删除
    box.classList.toggle('one') 切换  原来有one就删掉 没有就加上
    box.classList.contains('one') 是否包含 返回true或false

#自定义属性：
在html5中推出来了专门的data-自定义属性，在标签上一律以data-开头,在DOM对象上一律以dataset对象方式获取
    列如：<div data-id="1"> 自定义属性 </div>    let div = document.querySelector('div')   console.log(div.dataset.id)

#定时器
`setInterval` 是 JavaScript 中内置的函数，它的作用是间隔固定的时间自动重复执行另一个函数，也叫定时器函数。
    let timer=setInterval(repeat, 1000)  间隔 1000 毫秒，重复调用 repeat函数
    clearInterval(timer)    关闭定时器
#延迟函数
JavaScript 内置的一个用来让代码延迟执行的函数，叫 setTimeout
    let timer=setTimeout(repeat, 5000)  等待 5000 毫秒执行，仅仅只执行一次 repeat函数
    clearInterval(timer)    关闭延迟函数

#事件监听
`addEventListener` 是 DOM 对象专门用来添加事件监听的方法，它的两个参数分别为【事件类型】和【事件回调】。
     const btn = document.querySelector('#btn')
     btn.addEventListener('click', function (e) {
      //e:事件对象
      console.log(`注册了点击事件...${e.key}`)
      #阻止冒泡
      ev.stopPropagation()
    })
    事件类型： click 点击 ，submit 提交， dblclick 双击， mouseenter 鼠标移入， mouseleave 鼠标移出， focus 获得焦点, blur 失去焦点, input 用户输入 change 值改变事件 keydown keyup 键盘按下抬起触发
    鼠标经过事件：mouseover 和 mouseout 会有冒泡效果 ,  mouseenter  和 mouseleave   没有冒泡效果 (推荐)
    mousemove 鼠标移动事件
    
    # 事件流
    事件流是对事件执行过程的描述，了解事件的执行过程有助于加深对事件的理解，提升开发实践中对事件运用的灵活度。
    任意事件被触发时总会经历两个阶段：【捕获阶段】和【冒泡阶段】。简言之，捕获阶段是【从父到子】的传导过程，冒泡阶段是【从子向父】的传导过程。

    当某个元素的事件被触发时，事件总是会先经过其祖先才能到达当前元素，然后再由当前元素向祖先传递，事件在流动的过程中遇到相同的事件便会被触发。
    如果事件是在冒泡阶段执行的，我们称为冒泡模式，它会先执行子盒子事件再去执行父盒子事件，默认是冒泡模式。
    如果事件是在捕获阶段执行的，我们称为捕获模式，它会先执行父盒子事件再去执行子盒子事件。

    1. `addEventListener` 第3个参数决定了事件是在捕获阶段触发还是在冒泡阶段触发
    2. `addEventListener` 第3个参数为  `true` 表示捕获阶段触发，`false` 表示冒泡阶段触发，默认值为 `false`
    3. 事件流只会在父子元素具有相同事件类型时才会产生影响
    4. 绝大部分场景都采用默认的冒泡模式（其中一个原因是早期 IE 不支持捕获）

    阻止冒泡是指阻断事件的流动，保证事件只在当前元素被执行，而不再去影响到其对应的祖先元素。
    事件对象中的 `ev.stopPropagation` 方法，专门用来阻止事件冒泡。

    #事件解绑
     btn.removeEventListener('click', 事件名称)；   匿名函数无法解绑

#事件委托
事件的的冒泡模式总是会将事件流向其父元素的，如果父元素监听了相同的事件类型，那么父元素的事件就会被触发并执行，正是利用这一特征。众多子元素不需依次添加事件。只需要给父级添加事件然后让子元素冒泡给父级元素。
 // 假设上述的 10000 个 buttom 元素共同的祖先元素是 table
  const parents = document.querySelector('table')
  parents.addEventListener('click', function (ev) {
    // console.log(ev.target);
    // 只有 button 元素才会真正去执行逻辑，注意：tagName必须是大写
    if(ev.target.tagName === 'BUTTON') {
      // 执行的逻辑
      ev.target.style.color='red';
    }
  })

#阻止默认行为
document.querySelector('a').addEventListener('click', function (e) {e.preventDefault()})

#监听页面所有资源加载完毕：
load：把js代码放在head里面时可以把代码放在函数里面防止资源未加载就执行js代码报错。也可加在某个元素上来监听它加载完毕时执行代码。
DOMContentLoaded：无需等待样式表、图像加载。
window.addEventListener('load/DOMContentLoaded', function() {
    // xxxxx
})

#元素滚动事件
滚动条在滚动的时候持续触发的事件，也可加在某个元素上
window.addEventListener('scroll', function() {
    // 我想知道页面到底滚动了多少像素， 被卷去了多少  scrollTop
    const n = document.documentElement.scrollTop
    if (n >= 100) {
    div.style.display = 'block'
    }
})
document.documentElement.scrollTop是可读写的，可以通过点击页面按钮设置scrollTop=0立刻返回顶部   window.scrollTo(0,0)效果也是一样的

# 页面尺寸事件
会在窗口尺寸改变的时候触发事件：
window.addEventListener('resize', function() {
    // xxxxx
})
#获取元素宽高、
clientWidth、clientHeight:获取元素本身的宽高，不包含边框、margin、滚动条等.用于js获取元素大小，只读属性。
offsetWidth、offsetHeight:获取元素的尺寸，包含：内容、padding、border，只读属性。
offsetTop、offsetLeft:获取元素带有定位的上级边距，如果父级元素都没有定位则以文档左上角为准，只读属性。
getBoundingClientRect().left、getBoundingClientRect().top：获取元素在可视窗口的左边距和上边距
    getBoundingClientRect().top - document.documentElement.scrollTop  就是盒子在页面的上边距

scrollLeft、scrollTop:被卷曲的头部和左侧，配合页面滚动来写，可读写
    #改变值时可以在css里面给html标签添加 scroll-behavior: smooth; 让滚动条丝滑的滚动

#防止变量污染，可以将写好的模块放到自执行函数里面，注意：必须在后面加上分号
(function(){
    //代码  
})();

#日期对象
// 1. 实例化
const date = new Date();
const datetime = date.toLocaleString();
getFullYear 获取四位年份
getMonth 获取月份，取值为 0 ~ 11
getDate 获取月份中的每一天，不同月份取值也不相同
getDay 获取星期，取值为 0 ~ 6
getHours 获取小时，取值为 0 ~ 23
getMinutes 获取分钟，取值为 0 ~ 59
getSeconds 获取秒，取值为 0 ~ 59
# 时间戳
时间戳是指1970年01月01日00时00分00秒起至现在的总秒数或毫秒数，它是一种特殊的计量时间的方式。
获取时间戳的方法，分别为 getTime 和 Date.now 和  +new Date()

#节点
查找Dom节点
    parentNode：获取父级元素  document.querySelector('.box1').parentNode
    childNodes：获得所有子节点、包括文本节点(空格、换行)、注释节点等
    children:仅获得所有元素节点，返回的还是一个伪数组
    nextElementSibling：获得下一个兄弟节点
    previousElementSibling：获得上一个兄弟节点
添加节点
    createElement：动态创建任意 DOM 节点   document.createElement('p')  也可以在里面innerHTML需要的内容，动态渲染。
    appendChild：追加DOM节点 作为最后一个子元素
    insertBefore:在元素子节点下找到指定元素前追加DOM节点 insertBefore(追加的元素,放到哪个元素的前面)
    cloneNode:复制现有的DOM节点，传入参数 true 会复制所有子节点 false不包含任何后代节点只是标签。默认false
    removeChild：由父节点删除子节点，其次是要删除哪个子节点。

#M端事件(移动端) touch 触摸事件
touch对象代表一个触摸点。触摸点可能是一根手指，也可能是一根触摸笔。触屏事件可响应用户手指(或触控笔)对屏幕或者触控板操作。
touchstart：手指触摸到一个 DOM 元素时触发
touchmove：手指在一个 DOM 元素上滑动时触发
touchend：手指从一个 DOM 元素上移开时触发
    #移动端轮播图插件 swiper

# map 可以遍历数组处理数据，并且返回新的数组  forEach 可以遍历数组处理数据与map语法一样
map 也称为映射。映射是个术语，指两个元素的集之间元素相互“对应”的关系。
map重点在于有返回值，forEach没有返回值（undefined）
    const arr = ['red', 'blue', 'pink']
    // 1. 数组 map方法 处理数据并且 返回一个数组
    const newArr = arr.map(function (ele, index) {
    // console.log(ele)  // 数组元素 // console.log(index) // 索引号
    return ele + '颜色'
	})
# join 用于把数组中的所有元素转换一个字符串
// 小括号为空则逗号分割
console.log(newArr.join())  // red颜色,blue颜色,pink颜色
// 小括号是空字符串，则元素之间没有分隔符
console.log(newArr.join(''))  //red颜色blue颜色pink颜色
console.log(newArr.join('|'))  //red颜色|blue颜色|pink颜色
# splice 从指定下标位置开始删除数据到某个位置结束
数组.splice(下标位置, 删除的数量)

# 正则表达式
正则表达式在JavaScript中的使用场景:
例如验证表单:用户名表单只能输入英文字母、数字或者下划线，昵称输入框中可以输入中文(匹配比如用户名: /^[a-z0-9_-]3,16$/
过滤掉页面内容中的一些敏感词(替换)，或从字符串中获取我们想要的特定部分(提取)等
1. 定义规则
    const reg = /web/   表示字符串中包含web即为 true
2. 使用正则
    `test()方法`   用来查看正则表达式与指定的字符串是否匹配,如果正则表达式与指定的字符串匹配 ，返回`true`，否则`false`
    `exec()方法`   用于检索(查找)符合规则的字符串，找到返回数组，否则为 null
# 元字符
是一些具有特殊含义的字符，可以极大提高了灵活性和强大的匹配功能。- 比如，规定用户只能输入英文26个英文字母，换成元字符写法： /[a-z]/
# 元字符之边界符
正则表达式中的边界符（位置符）用来提示字符所处的位置，主要有两个字符^ 和 $,如果 ^ 和 $ 在一起，表示必须是精确匹配。
    const reg2 = /^web$/  ^代表开头，$代表结尾 。此示例表示文字必须是web才能返回true
# 元字符之量词
1. * 重复次数 >= 0 次
2. + 重复次数 >= 1 次
3. ? 重复次数  0 || 1 
4. {n} 重复 n 次
5. {n,} 重复次数 >= n 
6. {n,m}   n >= 重复次数 <= m
7. 注意事项： 逗号两侧千万不要加空格否则会匹配失败
# 元字符之范围
1. [abc] 匹配包含的单个字符， 多选1
     /^[abc]$/  只能出现a-c中间的任意一个
2. [a-z] 连字符 单个
    /^[a-z]$/   只能出现a-z中间的任意一个
    /^[a-zA-Z0-9]$/ 想要包含小写字母，大写字母 ，数字
    /^[a-zA-Z0-9_]{6,16}$/  用户名可以输入英文字母，数字，可以加下划线，要求 6~16位
3. [^a-z] 取反符
    /^[^a-z]$/  除了a-z中的字符其他都为true
# 预定义
指的是 某些常见模式的简写方式
    \d 匹配0-9之间的任一数字，相当于[0-9]
    \D 匹配所有0-9以外的字符，相当于 [^0-9]
    \w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9 ]
    \W 除所有字母、数字和下划线以外的字符，相当于 [^A-Za-z0-9_]
    \s 匹配空格 (包括换行符、制表符、空格符等)，相等于[\tr\n\wf]
    \S 匹配非空格的字符，相当于 [t\rnlwf]
# 替换和修饰符
i 是单词 ignore 的缩写，正则匹配时字母不区分大小写
g 是单词 global 的缩写，匹配所有满足正则表达式的结果
replace 替换方法，可以完成字符的替换
    const strEnd = str.replace(/java/, 'web')   只能替换出现的第一个，需要全部替换需要加上g
    const strEnd = str.replace(/java/g, 'web')   str里面的字符只要出现java全部替换
    const strEnd = str.replace(/java/ig, 'web')   不区分大小写，符合的字符串全部替换


## 作用域
# 局部作用域 局部作用域分为函数作用域和块作用域。
# 函数作用域
在函数内部声明的变量只能在函数内部被访问，外部无法直接访问。
    1. 函数内部声明的变量，在函数外部无法被访问
    2. 函数的参数也是函数内部的局部变量
    3. 不同函数内部声明的变量无法互相访问
    4. 函数执行完毕后，函数内部的变量实际被清空了
# 块作用域
在 JavaScript 中使用 `{}` 包裹的代码称为代码块，代码块内部声明的变量外部将【有可能】无法被访问。
    1. `let` 声明的变量会产生块作用域，`var` 不会产生块作用域
    2. `const` 声明的常量也会产生块作用域
    3. 不同代码块之间的变量无法互相访问
    4. 推荐使用 `let` 或 `const`
    注：开发中 `let` 和 `const` 经常不加区分的使用，如果担心某个值会不小被修改时，则只能使用 `const` 声明成常量。
# 全局作用域
`<script>` 标签和 `.js` 文件的【最外层】就是所谓的全局作用域，在此声明的变量在函数内部也可以被访问。
    1. 为 `window` 对象动态添加的属性默认也是全局的，不推荐！
    2. 函数中未使用任何关键字声明的变量为全局变量，不推荐！！！
    3. 尽可能少的声明全局变量，防止全局变量被污染
# 作用域链
作用域链本质上是底层的变量查找机制，在函数被执行时，会优先查找当前函数作用域中查找变量，如果当前作用域查找不到则会依次逐级查找父级作用域直到全局作用域
    1. 嵌套关系的作用域串联起来形成了作用域链
    2. 相同作用域链中按着从小到大的规则查找变量
    3. 子作用域能够访问父作用域，父级作用域无法访问子级作用域
# 闭包
闭包是一种比较特殊和函数，使用闭包能够访问函数作用域中的变量。从代码形式上看闭包是一个做为返回值的函数
    1.怎么理解闭包？
        - 闭包 = 内层函数 + 外层函数的变量
    2.闭包的作用？
        - 封闭数据，实现数据私有，外部也可以访问函数内部的变量，防止数据被外部篡改 
        - 闭包很有用，因为它允许将函数与其所操作的某些数据（环境）关联起来
    3.闭包可能引起的问题？
        - 内存泄漏
# 变量提升
变量提升是 JavaScript 中比较“奇怪”的现象，它允许在变量声明之前即被访问。只有var存在，只提供变量声明，不提供变量赋值。
    1. 变量在未声明即被访问时会报语法错误
    2. 变量在声明之前即被访问，变量的值为 `undefined`
    3. `let` 声明的变量不存在变量提升，推荐使用 `let`
    4. 变量提升出现在相同作用域当中
    5. 实际开发中推荐先声明再访问变量

## 函数
# 函数提升
函数提升与变量提升比较类似，是指函数在声明之前即可被调用。
    1. 函数提升能够使函数的声明调用更灵活
    2. 函数表达式不存在提升的现象，因为函数只提升声明不提升赋值
    3. 函数提升出现在相同作用域当中
# 函数参数
函数参数的使用细节，能够提升函数应用的灵活度。
    1. 声明函数时为形参赋值即为参数的默认值
    2. 如果参数未自定义默认值时，参数的默认值为 `undefined`
    3. 调用函数时没有传入对应实参时，参数的默认值被当做实参传入
# 动态参数
`arguments` 是函数内部内置的伪数组变量，它包含了调用函数时传入的所有实参。
    1. `arguments` 是一个伪数组
    2. `arguments` 的作用是动态获取函数的实参
# 剩余参数 提倡使用，少用动态参数
    1. `...` 是语法符号，置于最末函数形参之前，用于获取多余的实参
    2. 借助 `...` 获取的剩余实参，是个真数组
# 箭头函数
箭头函数是一种声明函数的简洁语法，它与普通函数并无本质的区别，差异性更多体现在语法格式上。
    1. 箭头函数属于表达式函数，因此不存在函数提升
    2. 箭头函数只有一个参数时可以省略圆括号 `()`
    3. 箭头函数函数体只有一行代码时可以省略花括号 `{}`，并自动做为返回值被返回
    # 箭头函数参数
    // 1. 利用箭头函数来求和
    const getSum = (...arr) => {
      let sum = 0
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
      }
      return sum
    }
    console.log(getSum(2, 3, 4)) // 9
    箭头函数中没有 `arguments`，只能使用 `...` 动态获取实参
    # 箭头函数 this
    箭头函数不会创建自己的this,它只会从自己的作用域链的上一层沿用this。

# 数组解构
数组解构是将数组的单元值快速批量赋值给一系列变量的简洁语法
// 普通的数组
let arr = [1, 2, 3]
// 批量声明变量 a b c 同时将数组单元值 1 2 3 依次赋值给变量 a b c
let [a, b, c] = arr
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
    1. 赋值运算符 `=` 左侧的 `[]` 用于批量声明变量，右侧数组的单元值将被赋值给左侧的变量
    2. 变量的顺序对应数组单元值的位置依次进行赋值操作
    3. 变量的数量大于单元值数量时，多余的变量将被赋值为  `undefined`
    4. 变量的数量小于单元值数量时，可以通过 `...` 获取剩余单元值，但只能置于最末位
    5. 允许初始化变量的默认值，且只有单元值为 `undefined` 时默认值才会生效
# 对象解构
对象解构是将对象属性和方法快速批量赋值给一系列变量的简洁语法
// 1. 这是后台传递过来的数据
    const msg = {
      "code": 200,
      "msg": "获取新闻列表成功",
      "data": [
        {
          "id": 1,
          "title": "5G商用自己，三大运用商收入下降",
          "count": 58
        },
        {
          "id": 2,
          "title": "国际媒体头条速览", 
          "count": 56
        },
      ]
    }
为了防止msg里面的data名字混淆，要求渲染函数里面的数据名改为 myData
    function render({ data: myData }) {
      // 要求将 获取过来的 data数据 更名为 myData
      // 内部处理
      console.log(myData)
    }
    render(msg)

    1. 赋值运算符 `=` 左侧的 `{}` 用于批量声明变量，右侧对象的属性值将被赋值给左侧的变量
    2. 对象属性的值将被赋值给与属性名相同的变量
    3. 对象中找不到与变量名一致的属性时变量值为 `undefined`
    4. 允许初始化变量的默认值，属性不存在或单元值为 `undefined` 时默认值才会生效


## 深入对象
了解面向对象的基础概念，能够利用构造函数创建对象。
# 构造函数
构造函数是专门用于创建对象的函数，如果一个函数使用 `new` 关键字调用，那么这个函数就是构造函数。
    2. 使用 `new` 关键字调用函数的行为被称为实例化
    3. 实例化构造函数时没有参数时可以省略 `()`
    4. 构造函数的返回值即为新创建的对象
    5. 构造函数内部的 `return` 返回的值无效！
    注：实践中为了从视觉上区分构造函数和普通函数，习惯将构造函数的首字母大写。
# 实例成员
通过构造函数创建的对象称为实例对象，实例对象中的属性和方法称为实例成员。
    1. 构造函数内部 `this` 实际上就是实例对象，为其动态添加的属性和方法即为实例成员
    2. 为构造函数传入参数，动态创建结构相同但值不同的对象
    注：构造函数创建的实例对象彼此独立互不影响。
# 静态成员
在 JavaScript 中底层函数本质上也是对象类型，因此允许直接为函数动态添加属性或方法，构造函数的属性和方法被称为静态成员。
    1. 静态成员指的是添加到构造函数本身的属性和方法
    2. 一般公共特征的属性或方法静态成员设置为静态成员
    3. 静态成员方法中的 `this` 指向构造函数本身
# 原型对象
构造函数通过原型分配的函数是所有实例对象所 共享的。
- JavaScript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象，所以我们也称为原型对象
- 这个对象可以挂载函数，对象实例化不会多次创建原型上函数，节约内存
- 我们可以把那些不变的方法，直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法。
- 构造函数和原型对象中的this 都指向 实例化的对象 
结合构造函数原型的特征，实际开发重往往会将封装的功能函数添加到原型对象中。
    # constructor 属性 
    每个原型对象里面都有个constructor 属性（constructor 构造函数）
    作用：该属性指向该原型对象的构造函数， 简单理解，就是指向我的爸爸，我是有爸爸的孩子
    使用场景：
        如果有多个对象的方法，我们可以给原型对象采取对象形式赋值.
        但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor 就不再指向当前构造函数了
        此时，我们可以在修改后的原型对象中，添加一个 constructor 指向原来的构造函数。
# 对象原型
对象都会有一个属性 __proto__ 指向构造函数的 prototype 原型对象，之所以我们对象可以使用构造函数 prototype 
原型对象的属性和方法，就是因为对象有 __proto__ 原型的存在。
注意：
    - __proto__ 是JS非标准属性  [[prototype]]和__proto__意义相同
    - 用来表明当前实例对象指向哪个原型对象prototype
    - __proto__对象原型里面也有一个 constructor属性，指向创建该实例对象的构造函数
# 原型继承
继承是面向对象编程的另一个特征，通过继承进一步提升代码封装的程度，JavaScript 中大多是借助原型对象实现继承的特性。
实现方式其实就是写一个公共函数，在继承函数的原型对象 赋值new一个公共函数。注：赋值后记得把constructor赋值给继承函数。
# 原型链
基于原型对象的继承使得不同构造函数的原型对象关联在一起，并且这种关联的关系是一种链状的结构，我们将原型对象的链状结构关系称为原型链
    ① 当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性。
    ② 如果没有就查找它的原型（也就是 __proto__指向的 prototype 原型对象）
    ③ 如果还没有就查找原型对象的原型（Object的原型对象）
    ④ 依此类推一直找到 Object 为止（null）
    ⑤ __proto__对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线
    ⑥ 可以使用 instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。  Array instanceof Object  返回true

## 内置构造函数
在 JavaScript 中**最主要**的数据类型有 6 种，分别是字符串、数值、布尔、undefined、null 和 对象，常见的对象类型数据包括数组和普通对象。其中字符串、数值、布尔、undefined、null 也被称为简单类型或基础类型，对象也被称为引用类型。
# Object
`Object` 是内置的构造函数，用于创建普通对象。
    1. 推荐使用字面量方式声明对象，而不是 `Object` 构造函数
    2. `Object.assign` 静态方法创建新的对象
    3. `Object.keys` 静态方法获取对象中所有属性
    4. `Object.values` 表态方法获取对象中所有属性值
# Array
`Array` 是内置的构造函数，用于创建数组。数组赋值后，无论修改哪个变量另一个对象的数据值也会相当发生改变
    1. 推荐使用字面量方式声明数组，而不是 `Array` 构造函数
    2. 实例方法 `forEach` 用于遍历数组，替代 `for` 循环 (重点)
    3. 实例方法 `filter` 过滤数组单元值，生成新数组(重点)
    4. 实例方法 `map` 迭代原数组，生成新数组(重点)
    5. 实例方法 `join` 数组元素拼接为字符串，返回字符串(重点)
    6. 实例方法  `find`  查找元素， 返回符合测试条件的第一个数组元素值，如果没有符合条件的则返回 undefined(重点)
    7. 实例方法`every` 检测数组所有元素是否都符合指定条件，如果**所有元素**都通过检测返回 true，否则返回 false(重点)
    8. 实例方法`some` 检测数组中的元素是否满足指定条件   **如果数组中有**元素满足条件返回 true，否则返回 false
    9. 实例方法 `concat`  合并两个数组，返回生成新数组
    10. 实例方法 `sort` 对原数组单元值排序
    11. 实例方法 `splice` 删除或替换原数组单元
    12. 实例方法 `reverse` 反转数组
    13. 实例方法 `findIndex`  查找元素的索引值
    14. 实例方法 `reduce` 返回累计处理的结果，经常用于求和等  arr.reduce(function(上一次值，当前值){}，初始值)  初始值不为对象时可无，有初始值时作为第一次循环的上一次值，无则数组第一个值作为上一次值
Array.from(Lis) 把伪数组转换为真数组
Lis.pop() 删除数组中最后一个对象
# 包装类型
在 JavaScript 中的字符串、数值、布尔具有对象的使用特征，如具有属性和方法
之所以具有对象特征的原因是字符串、数值、布尔类型数据是 JavaScript 底层使用 Object 构造函数“包装”来的，被称为包装类型。
    # String
    `String` 是内置的构造函数，用于创建字符串。
        1. 实例属性 `length` 用来获取字符串的度长(重点)
        2. 实例方法 `split('分隔符')` 用来将字符串拆分成数组(重点)
        3. 实例方法 `substring（需要截取的第一个字符的索引[,结束的索引号]）` 用于字符串截取(重点)
        4. 实例方法 `startsWith(检测字符串[, 检测位置索引号])` 检测是否以某字符开头(重点)
        5. 实例方法 `includes(搜索的字符串[, 检测位置索引号])` 判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false(重点)
        5. 实例方法 `toUpperCase` 用于将字母转换成大写
        7. 实例方法 `toLowerCase` 用于将就转换成小写
        8. 实例方法 `indexOf`  检测是否包含某字符
        9. 实例方法 `endsWith` 检测是否以某字符结尾
        10. 实例方法 `replace` 用于替换字符串，支持正则匹配
        13. 实例方法 `match` 用于查找字符串，支持正则匹配
        注：String 也可以当做普通函数使用，这时它的作用是强制转换成字符串数据类型。
    # Number
    `Number` 是内置的构造函数，用于创建数值。
        1. 推荐使用字面量方式声明数值，而不是 `Number` 构造函数
        2. 实例方法 `toFixed` 用于设置保留小数位的长度

## 深浅拷贝
直接赋值的方法，只要是对象，都会相互影响，因为是直接拷贝对象栈里面的地址。
浅拷贝如果是一层对象，不相互影响，如果出现多层对象拷贝还会相互影响
# 浅拷贝
首先浅拷贝和深拷贝只针对引用类型，浅拷贝：拷贝的是地址
    1. 拷贝对象：Object.assgin() / 展开运算符 {...obj} 拷贝对象
    2. 拷贝数组：Array.prototype.concat() 或者 [...arr]
如果是简单数据类型拷贝值，引用数据类型拷贝的是地址 (简单理解： 如果是单层对象，没问题，如果有多层就有问题)
# 深拷贝
首先浅拷贝和深拷贝只针对引用类型,深拷贝：拷贝的是对象，不是地址
    1. 通过递归实现深拷贝
    2. lodash的cloneDeep
    3. 通过JSON.stringify()实现   JSON.parse(JSON.stringify(obj))直接先把对象转成字符串再转成对象赋值给新对象

## 异常处理
# throw
异常处理是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运行
    1. throw 抛出异常信息，程序也会终止执行
    2. throw 后面跟的是错误提示信息
    3. Error 对象配合 throw 使用，能够设置更详细的错误信息   throw new Error('参数不能为空!')
# try ... catch ... finally
    1. `try...catch` 用于捕获错误信息
    2. 将预估可能发生错误的代码写在 `try` 代码段中
    3. 如果 `try` 代码段中出现错误后，会执行 `catch` 代码段，并截获到错误信息
# debugger
相当于断点调试

## 处理this
# 普通函数
**普通函数**的调用方式决定了 `this` 的值，即【谁调用 `this` 的值指向谁】
普通函数没有明确调用者时 `this` 值为 `window`，严格模式下没有调用者时 `this` 的值为 `undefined`。
# 箭头函数
**箭头函数**中的 `this` 与普通函数完全不同，也不受调用方式的影响，事实上箭头函数中并不存在 `this` ！箭头函数中访问的 `this` 不过是箭头函数所在作用域的 `this` 变量。
在开发中【使用箭头函数前需要考虑函数中 `this` 的值】，**事件回调函数**使用箭头函数时，`this` 为全局的 `window`，因此DOM事件回调函数不推荐使用箭头函数
同样由于箭头函数 `this` 的原因，**基于原型的面向对象也不推荐采用箭头函数**
## 改变this指向
# call
    1. `call` 方法能够在调用函数的同时指定 `this` 的值
    2. 使用 `call` 方法调用函数时，第1个参数为 `this` 指定的值
    3. `call` 方法的其余参数会依次自动传入函数做为函数的参数
# apply
const arr = [100, 44, 77]
Math.max.apply(Math, arr)
    1. `apply` 方法能够在调用函数的同时指定 `this` 的值
    2. 使用 `apply` 方法调用函数时，第1个参数为 `this` 指定的值
    3. `apply` 方法第2个参数为数组，数组的单元值依次自动传入函数做为函数的参数
# bind
let sayHello = sayHi.bind(user);  sayHello是一个新函数，sayHi是未指向的函数，user是指向的this
// 需求，有一个按钮，点击里面就禁用，2秒钟之后开启
document.querySelector('button').addEventListener('click', function () {
    // 禁用按钮
    this.disabled = true
    window.setTimeout(function () {
    // 在这个延时事件里面的this指向的window，并不是button
    this.disabled = false
    }.bind(this), 2000)   // 这里的this 和 btn 一样,所以用bind指向button后，延时事件里面的this就是button了
})
    `bind` 方法并**不会调用函数**，而是创建一个指定了 `this` 值的新函数
    注：`bind` 方法创建新的函数，与原函数的唯一的变化是改变了 `this` 的值。

# 防抖节流
1. 防抖（debounce）
所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间
使用场景：搜索框搜索输入、手机号、邮箱验证输入检测
实现方式:
    1.lodash 提供的防抖来处理  在执行函数基础上加上 _.debounce(mouseMove, 500)  mouseMove执行的函数  500：500延迟时间，毫秒
    2.手写一个防抖函数来处理   利用setTimeout
// 防抖函数  fu:需要执行的函数，t:防抖时间
    function debounce(fn, t) {
        let timeId
        return function () {
        // 如果有定时器就清除
        if (timeId) clearTimeout(timeId)
        // 开启定时器 200
        timeId = setTimeout(function () {
            fn()
        }, t)
        }
    }
2. 节流（throttle）
所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数
使用场景：高频事件:鼠标移动 mousemove、页面尺寸缩放 resize滚动条滚动scroll 等等
实现方式:
    1.lodash 提供的节流来处理  在执行函数基础上加上 _.throttle(mouseMove, 500)  mouseMove执行的函数  500：500毫秒内只执行一次
    2.手写一个节流函数来处理   利用setTimeout
// 节流函数 throttle  fu:需要执行的函数，t:节流时间
    function throttle(fn, t) {
        let timer=null
        return function(){
            if(!timer){
                timer=setTimeout(function(){
                    fn()
                    timer=null
                },t)
            }
        }
    }