input.onButtonPressed(Button.A, function () {
    if (effekt > 1) {
        effekt += -1
        radio.setTransmitPower(effekt)
    }
})
input.onButtonPressed(Button.B, function () {
    if (effekt < 7) {
        effekt += 1
        radio.setTransmitPower(effekt)
    }
})
let effekt = 0
let id = 8
effekt = 5
basic.showNumber(effekt)
radio.setGroup(id)
radio.setTransmitPower(effekt)
basic.pause(200)
basic.forever(function () {
    radio.sendNumber(0)
    basic.showNumber(effekt)
    basic.pause(200)
})
