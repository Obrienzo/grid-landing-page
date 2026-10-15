# Frontend Mentor - Grid landing page solution

This is a solution to the [Grid landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/grid-landing-page). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

✅ View the optimal layout for the page depending on their device's screen size
✅ See hover and focus states for all interactive elements on the page
✅ Open and close the navigation menu at any screen size (optional JavaScript)

### Screenshot

![Challenge Screenshot](./design/Screenshot%202026-10-08%20175701.png)

### Links

- Solution URL: [Github source code](https://github.com/Obrienzo/grid-landing-page)
- Live Site URL: [Challenge Preview](https://obrienzo.github.io/grid-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

For this project I have decided to implement my initial animation logic, after going through the documentation on [MDN](https://developer.mozilla.org/en-US/). Additionally, I implemented a robust grid layout to make all the stats tracks be equal based on the maximum content.

To see how you can add code snippets, see below:

```css
main {
  grid-template-columns: repeat(4, minmax(max-content, 1fr));
}
```

### Continued development

For future development, I think I still have to expand the use of accessibility in my code. Obviously, I did implement good amount of semantics in the project looking at my Lighthouse score, I think I still need to get feedback and learning new things.

### Useful resources

- [Using animation module](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using) - This offers a basic understanding of all the structure and syntax of an animation property.
- [CSS Grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout) - This was an eyeopener for me just how little I knew, and the different things that you can accomplish after reading this module.

### AI Collaboration

While doing this project the use of AI was minimal. However, I did use it to review my accessibility since the goal of doing this project was to implement the basics of accessibility.

It was insightful at some of the little details that I have missed and would not have pickup earlier.

## Author

- Website - [Disney](https://github.com/Obrienzo)
- Frontend Mentor - [@Disney](https://www.frontendmentor.io/profile/Obrienzo)
