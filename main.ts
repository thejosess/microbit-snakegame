let pos_x = 2
let pos_y = 1
basic.forever(function () {
    while (true) {
        led.plot(pos_x, pos_y)
        control.waitMicros(1000000)
        basic.clearScreen()
        pos_x = pos_x + 1
        control.waitMicros(1000000)
    }
})
