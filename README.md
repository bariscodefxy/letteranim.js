# letteranim.js
A library for coloring animation to every letter in the text. [See demo](https://bariscodefxy.github.io/letteranim.js/test/index.html)

# Using Library
```html
<script type="text/javascript" src="https://raw.githubusercontent.com/bariscodefxy/letteranim.js/master/src/letteranim.js"></script>
```

# Example Usage
```js
let letterAnimAPI = new letteranim();
letterAnimAPI.addAnimatedClass(".my-text", "#DBB311");
letterAnimAPI.addAnimatedClass(".my-nick", "#cccccc");
letterAnimAPI.setLoopTime(200);
letterAnimAPI.doAnimate();
```

# Todo
* make animation to all elements with specified class name
