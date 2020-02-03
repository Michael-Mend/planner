# planner

## user experience

Upon loading the page the user will see  the current date and time as well as timeblocks of every hour from 9am to 5pm. The textarea for
each time block will display a color either red, blue, or green; which denotes past, present, or future respectively. Each timeblock also
features a save button that allows the user to save the text in the text area to local storage.

![user interface](https://user-images.githubusercontent.com/58165715/73677357-0e6eef00-4684-11ea-8bf3-0fca5b4e6ff0.JPG)

finally the clear button allows the user to clear all text inputs and localstorage.

## structure

Upon loading the page a for loop is called to generate each timeblock div. Each div consists of the time, a text area, and a save button.
The script generately unique id's for each of these elements respective to their time.

![ap](https://user-images.githubusercontent.com/58165715/73678922-69eeac00-4687-11ea-8656-9310e2762f09.JPG)

From there, inside the same for loop, the script is determining weather each time block is past, present, or future then applies the
correlating style. 

![ppf](https://user-images.githubusercontent.com/58165715/73679302-1f216400-4688-11ea-9ce1-b2358a2136dc.JPG)
 * the '- 9' is used to make index 0 = 9am
 
 The save button stores the text area in local storage so upon reloading the page the text will remain in the text box. Finally, the
 clear button empties local storage and the time clock textareas to clear the page.
 
 ![svclr](https://user-images.githubusercontent.com/58165715/73679852-3c0a6700-4689-11ea-82b8-4437f1b1efc9.JPG)

