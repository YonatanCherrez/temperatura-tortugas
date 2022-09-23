basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 26) {
        basic.showString("T. Baja")
    }
    while (input.temperature() >= 26) {
        basic.showString("T. Normal")
    }
    while (input.temperature() == 34) {
        basic.showString("T. Normal")
    }
    while (input.temperature() > 34) {
        basic.showString("T. Alta")
    }
})
