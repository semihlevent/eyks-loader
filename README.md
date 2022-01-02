# eyks-loader

<!-- Eyks loader is a React component used in e-BDS (Electronic Board Meeting) application developped by [MKK (Central Repository of Turkey)](https://www.mkk.com.tr/). Loader consists of two circular arrows (logo of Eyks) and an optional status bar. -->

Below are the props that can be used to customize loaders:

#### -size

#### -color

#### -backgroundColor

#### -speed

#### -spinDelay

#### -statusBar

#### -done

#### -glowingColor

#### -spin

#### -spinDuration

#### -worldSpin

#### -worldSpinDuration

## `size`

Size prop is a numeric property. Set the size as desired. Default value is `8`.

## `color`

Color prop is a css color property. Default value is `rgba(154, 27, 21, 255)`.

## `backgroundColor`

BackgroundColor prop is a css color property. Default value is `white`.

## `speed`

Speed prop is a numeric property. Set the speed as desired between 0 to 10. Default value is `1.5`

## `spinDelay`

Spin delay prop is a numeric property. Set the spinDelay as desired milisecond value. There is no delay by default

## `statusBar`

Status bar prop is a boolean property. Default value is `false`. When set to `true` a status bar appears in the middle of the loader.

## `done`

Done prop is a boolean property. Default value is false.
When set to `true` status bar progress set to 100% in 300ms

## `glowingColor`

Glowing color prop is a css color property. Default value is `rgb(190, 4, 4)`. This value is used in status bar to add glowing effect.

## `spin, worldSpin`

A Boolean property. When set to true, spin animation begins.

## `spinDuration, worldSpinDuration`

CSS duration

## `thickness`

CSS length

## `EyksLoader`

#### -size

#### -color

#### -backgroundColor

#### -spinDelay

#### -glowingColor

#### -speed

#### -statusBar

#### -done

## `BoardMembersLoader`

#### -size

#### -colorPrimary

#### -colorSecondary

#### -backgroundColor

#### -spin

#### -spinDuration

#### -worldSpin

#### -worldSpinDuration

## `World`

#### -size

#### -thickness

#### -color

#### -spin

#### -spinDuration
