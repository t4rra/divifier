# uwuups! awll divs! <!-- omit in toc -->

tiwed of sewantic HTML? with divifier.js, the onwy tag u neewd is &lt;div&gt;!

### Tabwe of Contewnts <!-- omit in toc -->

- [instawwation](#instawwation)
- [uwusage](#uwusage)
	- [exampwle: cweate a tabwle](#exampwle-cweate-a-tabwle)
- [configuwuation](#configuwuation)
	- [uwuse awll `<span>` ewements, tuwwn off consowle message](#uwuse-awll-span-ewements-tuwwn-off-consowle-message)
- [owo what's this? a buwg?](#owo-whats-this-a-buwg)
- [contwibuwting](#contwibuwting)
- [wimitations](#wimitations)

## instawwation

1. delete github and never visit this repo again
2. put on programming socks
3. install divifier.js - either with file or cdn

   1. install with file
      1. download `divifier.js` into your repo
      2. paste at bottom 🥺 of the `<body>` tag
      ```
       <script src="[PATH]/divifier.js"></script>
      ```
   2. install with cdn
      1. paste cdn link at the bottom 🥺 of the `<body>` tag
      ```
      https://cdn.jsdelivr.net/gh/eaaasun/divifier@latest/divifier.min.js
      ```
4. paste the code after the file/cdn link to initialize divifier
   ```
    <script> divify(); </script>
   ```
2. take off programming socks

## uwusage

add a `<div>` with a class corresponding to whatever tag you want, and use whatever attributes fit that tag.

### exampwle: cweate a tabwle

```
<div class="table">
	<div class="tr">
		<div class="th">thing</div>
		<div class="th">link</div>
	</div>
	<div class="tr">
		<div class="td">example site</div>
		<div class="td">
			<div class="a" href="https://example.com">link</div>
		</div>
	</div>
	<div class="tr">
		<div class="td">image</div>
		<div class="td">
			<div class="img" src="https://example.com/example.png" alt="example image"></div>
		</div>
	</div>
</div>
```
###### the [demo page](https://example.com)'s [source](https://github.com/eaaasun/divifier/blob/main/index.html) has more examples, check it out! <!-- omit in toc -->

## configuwuation
option | value | default
--- | --- | ---
target | string | "div"
consoleMsg | boolean | true
### uwuse awll `<span>` ewements, tuwwn off consowle message

```
	<!-- other code -->
	<script href="[PATH]/divifier.js"></script>
	<script>
		divify({
			target: "span",
			consoleMsg: false
		});
	</script>
</body>
```

## owo what's this? a buwg?

1. good
2. open an issue with as much or as little detail
3. i will close ur issue
4. L+ratio+wontfiwx+mald+cry about it

## contwibuwting

1. never visit this repo again
2. open a pull request
3. i will deny said pull request
4. L+ratio+mald+cry about it

## wimitations

- autocomplete/code editors won't autocomplete
- formatters won't format properly

<h6 align="center">i am so, so deeply sorry</h6>
