# WebGL 初见

## 精美 WebGL 示例

### 屏幕里的水族馆

![WebGL 水族馆](/public/resources/articles/welcome_to_webgl/7753128416859d56b5561f3e9242de5f.jpg)

配图是 WebGLSamples 上的一个例子，利用浏览器模拟的一个水族馆。如果是 PC 环境阅读本文，可以 [点击链接](http://webglsamples.org/aquarium/aquarium.html) ，亲身体验“水族馆”的乐趣。

体验过水族馆后，相信大家都为 WebGL 的力量所震撼。各位开发者们，是不是摩拳擦掌跃跃欲试了呢？本系列文章就来带领大家走进 WebGL 的世界，领略 WebGL 给我们带来的快乐。

## @BeforeStart

工欲善其事，必先利其器。在我们开始教程前，让我们先来做好准备工作。

### 技术积累

本系列文章将会假设读者有一定的技术积累，并假设读者熟悉基本的 HTML、CSS、JavaScript 操作。后续文章将会在章节开始处，标明本节内容将会涉及的技术背景，并提供基本的参考资料，以便读者进行参考。

### 浏览器

WebGL 运行在浏览器中，所以我们需要选择并安装一个支持 WebGL 的浏览器。您可以选择如下浏览器：

* Google Chrome
* Firefox
* Safari
* Edge

如果需要了解更加详细的浏览器品牌/版本是否支持 WebGL，可以参考[“Can I use WebGL”](http://caniuse.com/#search=gl)获取更多信息。

在此，笔者使用的浏览器是 Google Chrome。

### 开发工具

IntelliJ，WebStorm，Eclipse，Sublime，Atom，Brackets，XCode……

选择一款你用的顺手的 IDE/编辑器即可，只要它支持编辑 HTML、CSS、JavaScript。当然，你也可以选择一款在线编辑工具，比如 CodePen 或者 JSFiddle。

在此，笔者使用的 IDE 为 IntelliJ IDEA。

### 调试工具

一个研发一半的时间都在调试，这句话在 WebGL 的世界里更是尤甚。所以，我们需要一些 Debug 工具来辅助我们进行问题的定位和排查。

* [WebGL Inspector](http://benvanik.github.io/WebGL-Inspector/)：一款 Google Chrome 的 WebGL 调试插件。
* [Shader Editor](https://github.com/spite/ShaderEditorExtension)：一款 Google Chrome 的 Shader 调试插件。

两款插件均可在 Chrome Shop 下载安装，不过需要科学上网。

* [WebGL Inspector Chrome Shop](https://chrome.google.com/webstore/detail/webgl-inspector/ogkcjmbhnfmlnielkjhedpcjomeaghda?utm_source=chrome-ntp-icon)
* [Shader Editor Chrome Shop](https://chrome.google.com/webstore/detail/shader-editor/ggeaidddejpbakgafapihjbgdlbbbpob?utm_source=chrome-ntp-icon)

OK！到此为止，我们已经准备好了所有需要的工具。接下来，让我们步入 WebGL 的殿堂，开始享受 WebGL 带来的快（kun）乐（rao）吧！