// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width=80, height=60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export function Position(x=0, y=0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize){
    newSize.width = Math.max(1, newSize.width);
    newSize.height = Math.max(1, newSize.height);
    
    const remainingWidth = this.screenSize.width - this.position.x;
    newSize.width = Math.min(newSize.width, remainingWidth);
    
    const remainingHeight = this.screenSize.height - this.position.y;
    newSize.height = Math.min(newSize.height, remainingHeight);

    this.size.resize(newSize.width, newSize.height);
  }

  move(newPosition) {
    newPosition.x = Math.max(0, newPosition.x);
    newPosition.y = Math.max(0, newPosition.y);
    
    const remainingX = this.screenSize.width - this.size.width;
    newPosition.x = newPosition.x <= remainingX ? newPosition.x : remainingX;

    const remainingY = this.screenSize.height - this.size.height;
    newPosition.y = (newPosition.y <= remainingY) ? newPosition.y : remainingY;
    
    this.position.move(newPosition.x, newPosition.y);
  }  

}

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);
  programWindow.resize(newSize);
  programWindow.move(newPosition);

  return programWindow;
}