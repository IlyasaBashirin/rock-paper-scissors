input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (Hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
let Hand = 0
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
	
})
