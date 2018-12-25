import {
  trigger,
  state,
  style,
  transition,
  animate,
  animation,
  keyframes,
  useAnimation
} from "@angular/animations";

export let bounceOutAnimation = animation(
  animate(
    "0.5s ease-out",
    keyframes([
      style({ offset: 0.2, opacity: 1, transform: "translateX(20px)" }),
      style({ offset: 1, opacity: 0, transition: "translateX(-100%)" })
    ])
  )
);
export let slideAnimation = trigger("slide", [
  transition(":enter", [
    style({ transform: "translateX(-10px)" }),
    animate(1000)
  ]),
  transition(":leave", useAnimation(bounceOutAnimation))
]);

export let fadeInAnimation = animation(
  [style({ opacity: 0 }), animate("{{ delay }} {{ easeing }}")],
  {
    params: {
      delay: "2s",
      easeing: "ease-out"
    }
  }
);
export let fade = trigger("fade", [
  transition(
    ":enter",
    useAnimation(fadeInAnimation, {
      params: {
        delay: "2s",
        easeing: "ease-out"
      }
    })
  ),
  transition(":leave", animate(2000))
]);
