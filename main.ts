let x = 0
let Punkte = 0
let Reaktionszeit = 0
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    x = 1
    Punkte = 0
})
basic.forever(function () {
    basic.setLedColor(0x0000ff)
    if (x == 1) {
        basic.setLedColor(0xff0000)
        basic.pause(randint(1000, 10000))
        basic.setLedColor(0x00ff00)
        basic.pause(100)
        if (input.buttonIsPressed(Button.A)) {
            Reaktionszeit += 100
        } else {
            Reaktionszeit += 100
            basic.pause(100)
            if (input.buttonIsPressed(Button.A)) {
                Reaktionszeit += 100
            } else {
                Reaktionszeit += 100
                basic.pause(100)
                if (input.buttonIsPressed(Button.A)) {
                    Reaktionszeit += 100
                } else {
                    Reaktionszeit += 100
                    basic.pause(100)
                    if (input.buttonIsPressed(Button.A)) {
                        Reaktionszeit += 100
                    } else {
                        Reaktionszeit += 100
                        basic.pause(100)
                        if (input.buttonIsPressed(Button.A)) {
                            Reaktionszeit += 100
                        } else {
                            Reaktionszeit += 100
                            basic.pause(100)
                            if (input.buttonIsPressed(Button.A)) {
                                Reaktionszeit += 100
                            } else {
                                Reaktionszeit += 100
                                basic.pause(100)
                                if (input.buttonIsPressed(Button.A)) {
                                    Reaktionszeit += 100
                                } else {
                                    Reaktionszeit += 100
                                    basic.pause(100)
                                    if (input.buttonIsPressed(Button.A)) {
                                        Reaktionszeit += 100
                                    } else {
                                        Reaktionszeit += 100
                                        basic.pause(100)
                                        if (input.buttonIsPressed(Button.A)) {
                                            Reaktionszeit += 100
                                        } else {
                                            Reaktionszeit += 100
                                            basic.pause(100)
                                            if (input.buttonIsPressed(Button.A)) {
                                                Reaktionszeit += 100
                                            } else {
                                                Reaktionszeit += 100
                                                basic.pause(100)
                                                if (input.buttonIsPressed(Button.A)) {
                                                    Reaktionszeit += 100
                                                } else {
                                                    Reaktionszeit += 100
                                                    basic.pause(100)
                                                    if (input.buttonIsPressed(Button.A)) {
                                                        Reaktionszeit += 100
                                                    } else {
                                                        Reaktionszeit += 100
                                                        basic.pause(100)
                                                        if (input.buttonIsPressed(Button.A)) {
                                                            Reaktionszeit += 100
                                                        } else {
                                                            Reaktionszeit += 100
                                                            basic.pause(100)
                                                            if (input.buttonIsPressed(Button.A)) {
                                                                Reaktionszeit += 100
                                                            } else {
                                                                Reaktionszeit += 100
                                                                basic.pause(100)
                                                                if (input.buttonIsPressed(Button.A)) {
                                                                    Reaktionszeit += 100
                                                                } else {
                                                                    Reaktionszeit += 100
                                                                    basic.pause(100)
                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                        Reaktionszeit += 100
                                                                    } else {
                                                                        Reaktionszeit += 100
                                                                        basic.pause(100)
                                                                        if (input.buttonIsPressed(Button.A)) {
                                                                            Reaktionszeit += 100
                                                                        } else {
                                                                            Reaktionszeit += 100
                                                                            basic.pause(100)
                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                Reaktionszeit += 100
                                                                            } else {
                                                                                Reaktionszeit += 100
                                                                                basic.pause(100)
                                                                                if (input.buttonIsPressed(Button.A)) {
                                                                                    Reaktionszeit += 100
                                                                                } else {
                                                                                    Reaktionszeit += 100
                                                                                    basic.pause(100)
                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                        Reaktionszeit += 100
                                                                                    } else {
                                                                                        basic.pause(100)
                                                                                        if (input.buttonIsPressed(Button.A)) {
                                                                                            Reaktionszeit += 100
                                                                                        } else {
                                                                                            Reaktionszeit += 100
                                                                                            basic.pause(100)
                                                                                            if (input.buttonIsPressed(Button.A)) {
                                                                                                Reaktionszeit += 100
                                                                                            } else {
                                                                                                Reaktionszeit += 100
                                                                                                basic.pause(100)
                                                                                                if (input.buttonIsPressed(Button.A)) {
                                                                                                    Reaktionszeit += 100
                                                                                                } else {
                                                                                                    basic.pause(100)
                                                                                                    if (input.buttonIsPressed(Button.A)) {
                                                                                                        Reaktionszeit += 100
                                                                                                    } else {
                                                                                                        Reaktionszeit += 100
                                                                                                        basic.showIcon(IconNames.Sad)
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    basic.showNumber((2400 - Reaktionszeit) / 100)
    x = 0
})
