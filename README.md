# Assignment-04
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById selects a single element using its unique ID. getElementsByClassName selects all elements that share the same class name and returns a collection of elements. querySelector can select the first element that matches any CSS selector, while querySelectorAll selects all elements that match a CSS selector and returns a list.

2. How do you create and insert a new element into the DOM?

To create and insert a new element, first  make a new element, then  add some content or properties to it using .appendChild() , and finally  insert it into the page by attaching it to  parent element.

3. What is Event Bubbling? And how does it work?

Event Bubbling is when an event starts from a child element and then moves up to its parent elements using .parentNode() . For example, click on a button inside a div, the button's event happens first, and then the event moves up to the div and triggers its event too.

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where we can a single event listener to a parent element to handle events on its child elements. It is useful because it avoids adding many listeners, and can handle new child elements added dynamically.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the browser’s default action, like stopping a form from submitting or a link from opening. stopPropagation() stops an event from moving up to parent elements, so only the element that triggered the event responds.