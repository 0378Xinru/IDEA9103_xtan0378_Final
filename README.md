# IDEA9103_xtan0378_Final

# Interactive Rectangle Animation

## Instructions on How to Interact with the Work

1. **Mouse Interaction**: Click and hold the mouse anywhere on the canvas to start rotating the rectangles. Release the mouse button to stop the rotation.
2. **Keyboard Interaction**: Press the 'R' key on your keyboard to reset all the rectangles to their initial positions and rotation angles.

## Individual Approach to Animating the Group Code

### User Input Driven Animation

I chose to drive my individual code using user input. The animation is triggered by mouse and keyboard inputs, making the experience interactive and engaging.

### Animated Properties

- **Rotation**: The rectangles rotate continuously while the mouse is pressed.
- **Reset**: Pressing the 'R' key resets all rectangles to their initial state.

### Uniqueness

My approach focuses on interactive control of the animation, allowing the user to start and stop the rotation using the mouse and reset the animation using a keyboard input. This makes the animation highly interactive compared to other group members' approaches:
- One member changes colors with a time-based approach.
- Another member adjusts component sizes based on audio input.

## Inspiration

### Visual Inspiration

The inspiration for the rotation effect comes from kinetic art installations where elements rotate in response to viewer interaction. This concept influenced the interactive aspect of my submission, providing a direct connection between user actions and visual changes.

[Interactive Art Inspiration Video](https://www.youtube.com/watch?v=gYlh-UAn3aY)

## Technical Explanation

### Code Overview

1. **Rectangle Manager Class**: Manages the properties and behaviors of each rectangle, including drawing, rotating, and resetting. Besides that this is the part from goup code.
2. **Setup Function**: Initializes the canvas and creates the rectangle objects.
3. **Draw Function**: Continuously renders the rectangles on the canvas, applying rotations if the mouse is pressed.
4. **Interaction Functions**: 
   - `mousePressed`: Starts the rotation.
   - `mouseReleased`: Stops the rotation.
   - `keyPressed`: Resets the rectangles when 'R' is pressed.
  
### Changes form Group Code

- **Rotation Feature**: Added the ability to rotate rectangles continuously while the mouse is pressed.
- **Reset Feature**: Implemented a reset functionality triggered by the ‘R’ key.
- **Interactive Instructions**: Displayed instructions on the canvas for user interaction.

The functions used in the individual part were all covered in our class. To ensure correct usage, I referred to the following resources:

- **p5.js rotate Reference**: [https://p5js.org/reference/#/p5/rect]
- **p5.js reset Reference**: [https://p5js.org/reference/#/p5.Graphics/reset]

### References

p5.js. (n.d.). rotate(). Retrieved May 25, 2024, from [https://p5js.org/reference/#/p5/rotate](https://p5js.org/reference/#/p5/rotate)

p5.js. (n.d.). reset(). Retrieved May 25, 2024, from [https://p5js.org/reference/#/p5.Graphics/reset](https://p5js.org/reference/#/p5.Graphics/reset)

YouTube. (2023, May 23). mentalheathawareness rotation animation. YouTube. [https://www.youtube.com/watch?v=gYlh-UAn3aY](https://www.youtube.com/watch?v=gYlh-UAn3aY)