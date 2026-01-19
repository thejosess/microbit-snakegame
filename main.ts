input.onButtonPressed(Button.A, function () {
    giro_a = direccion - 1
    if (giro_a <= 0) {
        giro_a = 4
    }
    direccion = giro_a
})
input.onButtonPressed(Button.B, function () {
    giro_b = direccion + 1
    if (giro_b >= 4) {
        giro_b = 4
    }
    direccion = giro_b
})
let giro_b = 0
let giro_a = 0
let pos_x = 0
let direccion = 0
let pos_y = 4
direccion = 1
let manzana1_y = randint(0, 4)
let manzana1_x = randint(0, 4)
if (manzana1_x == pos_x && manzana1_y == pos_y) {
    manzana1_y = randint(0, 4)
    manzana1_x = randint(0, 4)
}
led.plot(manzana1_x, manzana1_y)
basic.forever(function () {
    while (true) {
        led.plot(pos_x, pos_y)
        control.waitMicros(1000000)
        basic.clearScreen()
        led.plot(manzana1_x, manzana1_y)
        if (direccion == 4) {
            pos_x = pos_x - 1
            control.waitMicros(1000000)
        }
        if (direccion == 2) {
            pos_x = pos_x + 1
            control.waitMicros(1000000)
        }
        if (direccion == 3) {
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
