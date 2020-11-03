input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        basic.showNumber(pas)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.ThreeG, function () {
    pas += 1
    led.stopAnimation()
})
let pas = 0
pas = 0
