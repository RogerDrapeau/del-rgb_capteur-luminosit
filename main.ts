let Intensité_lumière = 0
function Bleu () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function Vert () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function mauve () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function ROUGE () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function Blanc () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
basic.forever(function () {
    Intensité_lumière = pins.analogReadPin(AnalogPin.P0)
    if (Intensité_lumière >= 600) {
        ROUGE()
    } else if (Intensité_lumière < 600 && Intensité_lumière > 450) {
        Vert()
    } else if (Intensité_lumière < 450 && Intensité_lumière > 300) {
        mauve()
    } else if (Intensité_lumière < 300 && (0 as any) > (150 as any)) {
        Bleu()
    } else {
        Blanc()
    }
})
