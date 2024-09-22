# Web Dev Starter Code

## Overview

TODO: Write a project description

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

TODO: You must credit the sources and authors of any code, libraries, or other
assets you use in your project. If you leave this section blank, your project
will be considered in violation of the Academic Honesty policy unless you truly
created everything from scratch with no outside help. If you need to use a
source that you cannot credit (e.g. a classmate's work), you must get explicit
permission from your instructor.

A simple bulleted list below is sufficient. For example:

- Bootstrap: https://getbootstrap.com/
- jQuery: https://jquery.com/
- Background image: https://unsplash.com/photos/...
- Sound effects: https://freesound.org/people/...
- Icons: https://fontawesome.com/
- Fonts: https://fonts.google.com/
- etc.
