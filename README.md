# Wallpaper-Engine-Repeating-Quotes
An adjustment to mdrb97's dynamic quotes which makes the quotes repeatedly change.

To use this, simply make two text layers. Bound the quote_author JavaScript file to the text you plan to use for the author and the quote_text file to the text layer you plan to use for the actual quote.

NOTES:
* You can add quotes by adding them to the quotesArray variable. Simply put a comma to separate the new quote, add your brackets ({}), and copy and paste another quote into the new brackets. Then adjust accordingly.
* You can adjust the refresh rate of the quote by adjusting the refresh rate variable in BOTH files. If you put it too high, the quote may go off screen.
* At this point the movement speed is fixed. I'm unfamiliar with Wallpaper engine and I couldn't get the text to return to it's initial origin. I just played around with the position until I found a position I could add to the current origin which would bring it back to its initial spot. If you adjust the movement speed, this number will be off and it will cause the text to slowly (or quickly) move out of position unless you adjust the multiplied number accordingly. Right now it's at 9.7 for 0.2 movement.

Thanks to mdrb97 for making the initial script I used for this. 
https://github.com/mdrb97
