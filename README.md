# Wallpaper-Engine-Repeating-Quotes
An adjustment to mdrb97's dynamic quotes which makes the quotes repeatedly change.

To use this, simply make two text layers. Bound the quote_author JavaScript file to the text you plan to use for the author and the quote_text file to the text layer you plan to use for the actual quote.

NOTES:
* You can add quotes by adding them to the quotesArray variable. Simply put a comma to separate the new quote, add your brackets ({}), and copy and paste another quote into the new brackets. Then adjust accordingly.
* You can adjust the refresh rate of the quote by adjusting the refresh rate variable in BOTH files. If you put it too high, the quote may go off screen.
* Movement speed should now be dynamic. Where you see 0.2 in the Vec3 method you can increase it to go faster or decrease to go slower. May look choppy if you go too high and/or go off screen. 

Thanks to mdrb97 for making the initial script I used for this. 
https://github.com/mdrb97

![](https://github.com/midas10/Wallpaper-Engine-Repeating-Quotes/blob/main/Demo.gif)
