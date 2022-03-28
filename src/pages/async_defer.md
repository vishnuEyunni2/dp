# Async vs Defer

`async` and `defer` are optional attributes for the HTML `<script>` tag.
They instruct the browser to download the indicated file in the background at a low priority without interrupting the process of rendering the 
page in the browser. 

```html
<head>
  <script async src="main.js"></script>
  <script defer src="resources.js"></script>
</head>
```

The `async` and `defer` attributes only apply to the external resources indicated with the `src` atrribute.
Inline `<script>` tags always block the rendering to execute.

## The differences

While both load the resources in the same non blocking way, the differences lies in the behavior of execution. 

The files with the attribute `async` will run in no particular order, whereas the ones with `defer` run in an orderly fashion they appear in HTML, towards
the end in the initial loading process i.e., before the `DOMContentLoaded` event.


| | async|defer|
|---|---|---|
|Loads at a low priority without render blocking|:heavy_check_mark:|:heavy_check_mark:|
|Only applies to external `<script>s` (with a src attribute)|:heavy_check_mark:|:heavy_check_mark:|
|Executes immediately when loaded| :heavy_check_mark:   |   |
|Executes in no particular order   | :heavy_check_mark:  |   |
|Executes in sequence   |   | :heavy_check_mark:  |
|Can interrupt initial rendering to execute|  :heavy_check_mark:  |   |
|Only executes after initial rendering, just before the DOMContentLoaded event | | :heavy_check_mark:  |


The effect of `defer` attrib is similar to placing the `<script>` tag at the end in HTML, before the `</body>` tag.
The advantage of `defer` is that `<script>s` can be placed in `<head>` to be discovered and start loading sooner than the resources found
at the bottom of `</body>` tag.
