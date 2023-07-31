# Presentation of Vue.js

## What is Vue.js?

Vue *(pronounced /vjuː/, like view)* is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

## Comparison between the frameworks

Let's try to compare Vue with the other two most popular JS frameworks, React and Angular.

### Similarity between these 3 frameworks:

- Very popular, used by top companies
- Mature, stable, funded long-term support
- Component oriented codebase
- Suitable for modern technological stacks (ES6+ / TypeScript)
- Large ecosystem of components and tools

### Product positioning / self-description

React, Vue and Angular position themselves in different categories, this can be observed from the first lines of their introduction. React is defined as a **library**, independent of the technical stack. Angular is defined as the one **framework** for all needs, desktop and mobile. While Vue is caught in the middle, defined as a **progressive framework**, versatile and **incrementally adoptable**. A perfect middle ground between a library and a fully equipped framework.

### Language, programming style and technical stack

|               | React	      | Vue.js	         | Angular       |
|---------------|-------------|------------------|---------------|
Language         |	JSX*    | Optional support of JSX and TypeScript	| TypeScript* |
Paradigm       | Encourage functional programming | Encourage  declarative programming	| Mix between classes oriented declarative programming and functional programming (RxJs) |
State management	| Immutable centralized state (Flux) | Optional centralized	state (Vuex) or internal mutable state	| Internal mutable state , no official centralized state |
Reactivity | Manual (`setState` + VDOM diffing) | Automatic (observers/Proxies) | Automatic (Zones/dirty-checking) |
Stack |	Not self-sufficient, to combine with complete web stack. Rich ecosystem. | Some official tools maintained by the core team. Third-party solutions are promoted if appropriate.	| Full-stack framework sef-sufficient with built-in security features. Complete but less open. |

*\* optional but highly recommended*

### Comparison in metaphor

<div class="cols">
<div class="col">

- Does one thing but does it very well
- Not for everyone
- Innovative and disruptive
- Make sure you have spare parts

</div>
<div class="col">

- Accessible and easy to handle
- Familiarity with use
- Efficient quickly, can be less sustainable over time
- Fairly conventional, big tuning potential

</div>
<div class="col">

- Fully equipped with all options
- Heavyweight category
- Slower at startup, sustainable over time
- Out-of-the-box spare parts harder to find on the market

</div>
</div>


### Vue 3 or Vue 2 ?

The 3.0 version of the core library of Vue has officially been released as of 18 September 2020, but migrating the entire ecosystem will take several years. Since the API is relatively stable between Vue 2 and Vue 3, we propose this training session for both Vue 3 and Vue 2. Click on this switch at anytime:

<VueVersionSwitch slotKey="presentation" />

::: slot presentation-vue2
::: tip
The training content will be shown for our good'old Vue 2 !
:::

::: slot presentation-vue3
::: tip
The training content will be shown for the brand new Vue 3 !
:::

We recommend you to pick:
- Vue 2 if you intend to work on an existing Vue project
- Vue 3 if you are going to start a fresh new project.