basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) > 2 && cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 20) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        cuteBot.motors(25, -100)
    } else {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xb09eff)
        cuteBot.motors(80, 80)
    }
})
