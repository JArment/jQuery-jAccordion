Creates a simple accordion user interface.

### Some Simple CSS:
<pre>body {
 margin: 10px auto;
 width: 570px;
 font: 75%/120% Arial, Helvetica, sans-serif;
}
.accordion {
 border-bottom: solid 1px #c4c4c4;
 width: 480px;
}
.accordion .panel {
 background: #f7f7f7;
 border: solid 1px #c4c4c4;
 border-bottom: none;
 padding: 0 10px 10px;
}
.accordion h3 {
 background: #e9e7e7 url(images/arrow-square.gif) no-repeat right -51px;
 padding: 7px 15px;
 margin: 0 -10px -10px;
 font: bold 120%/100% Arial, Helvetica, sans-serif;
 cursor: pointer;
}
.accordion h3:hover {
 background-color: #e3e2e2;
}
.accordion .active h3 {
 margin-bottom: 10px;
}
section {
 display: block;
}</pre>

### Example Usage with Defaults:
<pre>$('.accordion').jAccordion({
  activePanel: 0,
  headingTag: 'h3'
});</pre>
