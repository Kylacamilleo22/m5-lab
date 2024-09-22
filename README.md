# Web Dev Starter Code

## Overview

This is a simple program that changes html elements to be more accessible to screen reader users. CSS and Javascript were also used to add style and functionality.

## Compiling and Running the Repository

To run,

1. Clone the repository
2. In VSCode, if have the preview extension added, right click on index.html and click 'show preview'
3. To view in localhost, open the terminal, do (1) 'npm install' (2) 'npm run', and open localhost:3000 in your browser


## Accessibility Lab Answers

Color:
- The green is hard to look and read at, changing it to a darker color will be even harder to see the font due to it being black. Changing it to white was easier on the eyes and more visible.

Semantic HTML:
- Before changing anything else, It's still hard to navigate when using the keyboard. It skips a lot of content that needs to be accessible.
- To make it easier for screen reader users to naviate, I changed some html elements that were used, such as having a header, nav, h1-3, and buttons.

Images:
- I added alt description to make it accessible to screen readers.

The Audio Player
- The two different type of audio (mp3 and ogg) was used to provide compatibility.
- A transcription was added as a paragraph. I would have liked to have a transcription as an optional button, maybe in another time.

The Forms
- I've added a label inside the input so it's not a visible text, but available for screen readers.
- I added a label for 'Your name' and 'Your comment' with the use of 'for='

The Show/Hide Comment Control
- To make the show/hide comment control, I made it as a button instead. Now it doesn't skip it when using tab and can now hide/show using return key.

The Table
- I've added a caption for the title of the table.
- I've added a summary inside the table element to describe the table.
- I've also associate the columns and rows by using scope.

Other Considerations?
- Like I've said in the audio section, I would have liked the transcription as an optional view so it's not in the way for other users. It would be problematic if the audio was very long.
- Changing the h1-3 fonts to a non-cursive might be better for readability.

## Sources and Credits

- mdn web docs:
  - https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML
  - https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript
  - https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics
  - https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia
- Digital Accessibility   
  - https://digitalaccessibility.virginia.edu/table-accessibility-basics#:~:text=Semantic%20markup%20is%20the%20foundation,and%20conveying%20information%20to%20users.
