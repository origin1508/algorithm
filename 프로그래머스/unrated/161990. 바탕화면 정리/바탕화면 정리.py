def solution(wallpaper):
    lux = 50
    luy = 50
    rdx = 0
    rdy = 0
    
    for x in range(len(wallpaper)):
        for y in range(len(wallpaper[0])):
            if wallpaper[x][y] == "#":
                if lux > x:
                    lux = x
                if luy > y:
                    luy = y
                if rdx < x + 1:
                    rdx = x + 1
                if rdy < y + 1:
                    rdy = y + 1          

    return [lux, luy, rdx, rdy]