let zeit = 0
while (true) {
    zeit = Math.round(input.runningTime() / 1000)
    if (zeit % 2) {
        basic.setLedColor(0x500000)
    } else {
        basic.setLedColor(0x005000)
    }
    
}
