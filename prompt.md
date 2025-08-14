Help me create a figma plugin using /yuanqing/create-figma-plugin (context7 id) that will create apple bento boxes randomly kidna like the one in the example design shown in example.png

I want a bunch of rectangles(some squares), random sizes, random places and I want it to look like the apple summary slides.

it should make the boxes as big as possible while still containing them in the frame and fitting all spaces so leaving almost no blank space(There will be some blank space because of the spacing)

Use context7 to understand create-figma-plugin and help create it

Read All of these
https://medium.com/@jefyjery10/apples-bento-grid-secret-how-a-lunchbox-layout-sells-premium-tech-7c118ce898aa
https://ibelick.com/blog/create-bento-grid-layouts
https://blog.aceternity.com/how-to-create-a-bento-grid-with-tailwindcss-nextjs-and-framer-motion

And read the existing project because it is mostly fully what we want just make it arrange the rectangles in this specific way rather than having them all placed horizontally

Maybe first create an extension to just replicate it exactly and no customisability at all

Remember, no customisability at all, just basically copy, pasting the existing bento grid exactly. Make it exactly the same and have these details:

Rectangles: #FFFFFF
Rectangles Container: #ECECEC
Spacing Between Rectangles: 13
Rectangle Corner Radius: 26
Rectangles Container Radius: 36
Figure out the spacing between rectangles border and container border
Total size of all rectangles: 1455x712
Size of container: 1506x762

Make sure it looks exactly the same when it generates it.

To use context7, get https://context7.com/{id}/llms.txt?tokens=50000

Ok, I have the constant thing replicating the bento grid exactly each time. Now you should make it randomised

Make sure to prioritise more smaller boxes and make the things controllable with a ui. First understand how to make the ui work then make it so the existing project is copied over and configurable.

I want it to look like apple's summary slides and look completely different