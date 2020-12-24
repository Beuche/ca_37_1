zeit=0
while True:
    zeit=Math.round(input.running_time()/1000)
    if zeit % 2 :
        basic.set_led_color(0x500000)
    else :
        basic.set_led_color(0x005000)
       
   
