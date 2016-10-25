// Each object is responsible for setting it's own handler then
// on that object's update check for key events that match
// and update the state based on the action (click, down, up, keydown, keyup) taken


MyWard.Keyboard = {
  Down  : [],
  Up    : []
};


$(window).keydown(function (e) {
  if (!MyWard.isActive) {
    if (e.which == 13) {
      MyWard.Nav.showGame();
    }
    return;
  }
  MyWard.Keyboard.Down.push(e.which);
})


$(window).keyup(function (e) {
  MyWard.Keyboard.Up.push(e.which);
})