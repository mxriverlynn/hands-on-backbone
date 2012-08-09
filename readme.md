# Hands-On Backbone.js

This is the code that goes along with the 4-part screencast
series that I released through the Pragmatic Programmers.

The series is available for purchase at: 

### http://pragprog.com/screencasts/v-dback/hands-on-backbone-js

## Running The Sample Code

This sample application is built with Ruby and the Sinatra framework
as the back-end / web server. Backbone itself does not care
what the back-end server is built with. I chose Ruby and Sinatra
because of their simplicity and ubiquity across platforms.

To install and run this code, you need a ruby installation on
your computer. You can obtain an appropriate version at
http://ruby-lang.org

Once you have that installed, you will also need the RubyGems
system (typically included with the ruby runtime), available
from http://rubygems.org

To install Sinatra and all of the other gems necessary to run
the sample code, install the bundler gem, then use bundler
to install the remaining gems:

```
gem install bundler

bundle install
```

The `bundle install` command must be run from a folder that
contains a `Gemfile`. 

To run the application, open the folder that you wish to
run from, and run `ruby app.rb` from a command prompt. This
will start the sinatra web server. Open your browser to 
http://localhost:4567 and you're ready to go.
 
## About The Series

Backbone.js is a hot topic these days, and with good reason. 
It powers some of the web’s most well-known applications 
including the LinkedIn mobile app, the Wal-Mart mobile app, 
rdio’s music player for both the web and their desktop clients, 
the Disqus commenting widget and much, much more. This little 
library of simple abstractions has helped to create a new 
generation of interactive and rich applications for the 
web, and it’s time for you to learn it.

With a nearly endless stream of success stories, blog posts, 
add-ons and frameworks built on top of Backbone.js, you don’t 
need another set of marketing materials to tell you why you 
should be working with Backbone.js. What you need is a way 
to get started quickly – to get up to speed with Backbone’s 
components, learning how to orchestrate them to create rich, 
interactive applications in a browser. This series of 
screencasts from Backbone.js expert Derick Bailey, will teach 
you what you need to know in a straight-to-the-point, hands-on 
way to building single page applications for today’s modern web.

But this isn’t marketing material to try and sell you on why 
you should use Backbone instead of Ember, Angular, Batman 
(yes, there’s a JavaScript MVC framework called Batman) or 
anything else. This is a hands-on, down and dirty, 
straight-to-the point walkthrough of all of the core components 
of Backbone. It will show you the fundamentals of creating 
single page applications in one of today’s most powerful 
JavaScript libraries. It will get you up to speed on how to 
use all of the components of Backbone, alongside your own 
JavaScript code, to create a rich and interactive image gallery 
application. And it will show you many of the common pitfalls 
and errors that you’ll run into, and how to avoid and correct 
for those problems.

In this 4 part screencast series, Backbone.js expert Derick 
Bailey will walk you through a hands-on introduction to building 
an image gallery application with Backbone, from the ground up. 
You’ll learn how to take an existing HTML form and jQuery code 
base, and migrate that into a Backbone view. You’ll use models 
and collections to store the image information entered into the 
form, and display a list of images to choose from and view. 
You’ll build an image viewer from a list, and see how to take 
advantage of the browser’s forward and back buttons with routers. 
Server persistence of image data will let the application reload 
from where the user left off, and common error scenarios will be 
handled.

## License And Copyright

Copyrights apply to this source code. You may use the source 
code in your own projects, however the source code may not be 
used to create training material, courses, books, articles, and 
the like. We make no guarantees that this source code is fit for 
any purpose.

Copyright &copy;2012 The Pragmatic Programmers, LLC. All Rights Reserved.
