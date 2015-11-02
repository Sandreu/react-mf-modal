# Animations

## Philosophy

react-mf wants to be agnotic, and doesn't want to deal with deps you don't want.
Since you may want to use [react-motion](https://github.com/chenglou/react-motion/)
or [core animations](https://facebook.github.io/react/docs/animation.html),
I chose to keep it as something you can handle on your own.

For the same reason, and because I didn't found an elegant way to do it,
theme components can't be used with animations.


## How to do it

The idea is to overload the container, and create your own Backdrop & Modals.
