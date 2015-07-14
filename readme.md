Template
===

#example

```html
<div class="box">
  <script type="text/template">
    <a data-snooze="http://opp.buzz/images/product/§id§" href="§linkURL§">
      <div>
        <div>
          <div class="name"><span>§product_name§</span></div>
          <div class="intro"><span>§intro§</span></div>
        </div>
      </div>
    </a>
    <br>
  </script>
</div>

```

```js
box=new Template(document.querySelector('.box'));
box.gen(data);

```
