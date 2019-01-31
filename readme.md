# Introduction

This is a simple repo with Typescript + Parcel + React + ReactDOM 


# credits
- uConnect

# installation

- clone
- cd into directory
- command: `yarn`
- command to start: `yarn start`


# Lecture Notes:
## Rules
- Whenever you write `<html>` or `<ReactCOmponent />`
    -  use `.tsx` extension.
    -  `import * as React from 'react'`
- 



## assignment
- Create a complex website layout
    - create Footer.tsx
    - create Header.tsx
    - create Sidebar.tsx
    - Import all those in the App.tsx
    - Combine all components.


## Day Notes

- There are two types of components
    - Class Based Component or Statefull component
        - rules
            - it must be extended from `React.Component`
            - it must have a method called `render()`
        - Notes
            - You can still make a class components without a state in it.
    - Functional Components or Stateless Components
        - When you write a JSX or TSX inside a normal function, it becomes Functional Component.
        - Why we call it stateless? Because it lacks `state` like Class Components
    - When we write component we can decide what type of component should we write by just
    identifying whether this component needs a state or not.


