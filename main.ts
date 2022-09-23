basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 26) {
        basic.showString("T. Baja")
    }
    basic.showNumber(input.temperature())
    while (input.temperature() <= 26) {
        basic.showString("T. Normal")
    }
    basic.showNumber(input.temperature())
    while (input.temperature() >= 34) {
        basic.showString("T. Alta")
    }
})
