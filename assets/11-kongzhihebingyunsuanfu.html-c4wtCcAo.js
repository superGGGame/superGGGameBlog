import{_ as n,c as a,a as e,o as p}from"./app-eVfC9Zrv.js";const t={};function l(o,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="空值合并运算符" tabindex="-1"><a class="header-anchor" href="#空值合并运算符"><span>空值合并运算符 ’??‘</span></a></h1><blockquote><p>⚠️ 最近新增的特性 这是一个最近添加到 JavaScript 的特性。旧式浏览器可能需要 polyfills。</p></blockquote><p>空值合并运算符（nullish coalescing operator）的写法为两个问号 <code>??</code> 。</p><p>由于它对待 <code>null</code> 和 <code>undefined</code> 的方式类似，所以在本节讨论中，我们把一个值不是 <code>null</code> 也不是 <code>undefined</code> 时，我们将其称为“已定义的（defined）”。</p><p><code>a ?? b</code> 的结果时：</p><ul><li>如果 <code>a</code> 是已定义的，则结果为<code>a</code>,</li><li>如果 <code>a</code> 不是已定义的，则结果为 <code>b</code>.</li></ul><p>我们可以使用我们已知的运算符重写 <code>result = a ?? b</code>，像这样：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">result <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>??</code> 的常见使用场景是提供默认值。</p><p>例如：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> user<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>user <span class="token operator">??</span> <span class="token string">&quot;匿名&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 匿名（user 未定义）</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，如果 <code>user</code> 的值不为 <code>null/undefined</code> 则显示 <code>user</code> ，否则显示 <code>匿名</code>。如果 <code>user</code> 是已定义的，则返回 <code>??</code> 号的前置值。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>user <span class="token operator">??</span> <span class="token string">&quot;匿名&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// John（user 已定义）</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以使用 <code>??</code> 序列从一系列的值中选择出第一个非 <code>null/undefined</code> 的值。</p><p>例如：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> firstName <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> lastName <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> nickName <span class="token operator">=</span> <span class="token string">&quot;Supercoder&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 显示第一个已定义的值：</span></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>firstName <span class="token operator">??</span> lastName <span class="token operator">??</span> nickName <span class="token operator">??</span> <span class="token string">&quot;匿名&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Supercoder</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="与-比较" tabindex="-1"><a class="header-anchor" href="#与-比较"><span>与 <code>||</code> 比较</span></a></h2><p>或运算符 <code>||</code> 可以以与 <code>??</code> 运算符相同的方式使用。</p><p>例如，在上面的代码中，我们可以用 <code>||</code> 替换掉 <code>??</code>，可以获得相同的效果：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> firstName <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> lastName <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> nickName <span class="token operator">=</span> <span class="token string">&quot;Supercoder&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 显示第一个真值：</span></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>firstName <span class="token operator">||</span> lastName <span class="token operator">||</span> nickName <span class="token operator">||</span> <span class="token string">&quot;Anonymous&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Supercoder</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它们之间重要的区别是：</p><ul><li><code>||</code> 返回第一个<strong>真</strong>值。</li><li><code>??</code> 返回第一个<strong>已定义的</strong>值。</li></ul><p>也就是说，<code>||</code> 无法区分 <code>false</code>、<code>0</code>、空字符串<code>&quot;&quot;</code> 和 <code>null/undefined</code>。它们都一样 —— 假值（falsy value）。</p><p>不过在实际中，我们可能只想在变量的值为 <code>null/undefined</code> 时使用默认值。比如说用户传入的值就是为 0 ，此时就不应该使用默认值去代替。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> height <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>height <span class="token operator">||</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>height <span class="token operator">??</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级"><span>优先级</span></a></h2><p><code>??</code>运算符的优先级与 <code>||</code> 相同，它们的优先级都为 <code>3</code>。这意味着它在 <code>=</code> 和 <code>?</code> 前计算，但在大多数其他运算（例如 <code>+</code> 和 <code>*</code>）之后计算。</p><p>所以我们可能需要在这样的表达式中添加括号：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> height <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> width <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 重要：使用括号</span></span>
<span class="line"><span class="token keyword">let</span> area <span class="token operator">=</span> <span class="token punctuation">(</span>height <span class="token operator">??</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>width <span class="token operator">??</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>否则，由于 <code>*</code> 的优先级比 <code>??</code> 高，它会先执行，进而导致错误的结果。</p><h2 id="与-或-一起使用" tabindex="-1"><a class="header-anchor" href="#与-或-一起使用"><span>?? 与 &amp;&amp; 或 || 一起使用</span></a></h2><p>出于安全原因，JavaScript禁止将 <code>??</code> 运算符与 <code>&amp;&amp;</code> 和 <code>||</code> 运算符一起使用，除非使用括号明确指定了优先级。</p><p>下面的代码会触发一个语法错误：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token number">2</span> <span class="token operator">??</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// Syntax error</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这个限制无疑值得商榷，它被添加到语言规范时为了避免人们从 <code>||</code> 切换到 <code>??</code> 时的编程错误。</p><p>可以明确的使用括号来解决这个问题：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 正常工作了</span></span>
<span class="line"></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><ul><li>空值合并运算符 <code>??</code> 提供了一种从列表中选择第一个“已定义的”值的简便方式。 它被用于为变量分配默认值：<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 当 height 的值为 null 或 undefined 时，将 height 的值设置为 100</span></span>
<span class="line">height <span class="token operator">=</span> height <span class="token operator">??</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>??</code> 空值合并运算符的优先级非常低，仅略高于 <code>?</code> 和 <code>=</code>，因此在表达式中使用它请考虑添加括号。</li><li>如果没有明确添加括号，不能将其与 <code>||</code> 或 <code>&amp;&amp;</code> 一起使用。</li></ul>`,39)]))}const i=n(t,[["render",l],["__file","11-kongzhihebingyunsuanfu.html.vue"]]),d=JSON.parse('{"path":"/series/JavaScript/01-JavaScriptjichuzhishi/11-kongzhihebingyunsuanfu.html","title":"空值合并运算符 ‘??’","lang":"zh-CN","frontmatter":{"title":"空值合并运算符 ‘??’","date":"2025-02-04 18:24"},"headers":[{"level":2,"title":"与 || 比较","slug":"与-比较","link":"#与-比较","children":[]},{"level":2,"title":"优先级","slug":"优先级","link":"#优先级","children":[]},{"level":2,"title":"?? 与 && 或 || 一起使用","slug":"与-或-一起使用","link":"#与-或-一起使用","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"filePathRelative":"series/JavaScript/01-JavaScript基础知识/11-空值合并运算符.md"}');export{i as comp,d as data};
