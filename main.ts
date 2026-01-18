let pos_x = 0
let pos_y = 4
let direccion = 1
basic.forever(function () {
    while (true) {
        led.plot(pos_x, pos_y)
        control.waitMicros(1000000)
        basic.clearScreen()
        if (direccion == 4) {
            pos_x = pos_x - 1
            control.waitMicros(1000000)
        }
        if (direccion == 3) {
            pos_x = pos_x + 1
            control.waitMicros(1000000)
        }
        if (direccion == 2) {
            pos_y = pos_y + 1
            control.waitMicros(1000000)
        }
        if (direccion == 1) {
            pos_y = pos_y - 1
            control.waitMicros(1000000)
        }
        if (pos_x > 4) {
            pos_x = 4
        }
        if (pos_y > 4) {
            pos_y = 4
        }
        if (pos_y < 0) {
            pos_y = 0
        }
        if (pos_x < 0) {
            pos_x = 0
        }
    }
})
