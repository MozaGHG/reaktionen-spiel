let x = 0
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    x = 1
})
basic.forever(function () {
    basic.setLedColor(0x0000ff)
    if (x == 1) {
        basic.setLedColor(0xff0000)
        basic.pause(randint(1000, 10000))
        basic.setLedColor(0x00ff00)
    }
})
