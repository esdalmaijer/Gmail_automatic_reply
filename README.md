Gmail automatic reply
=====================


ABOUT
-----

In Gmail, you can set a *vacation responder*, which is great for automatic
replies. However, if you have more than one address linked to your account,
you cannot set the vacation responder to reply specifically to emails that
were sent to one of your addresses only.

A solution to this problem can be found in Google Script, where you can
set up some javascript code to be run periodically. This is an example
script.

**Example usage:**
- Go on holiday with an automatic reply for your work email, but not for
your personal email.
- Set an automated reply for an obsolete account, but not for your other
accounts


HOWTO
-----

1) Log into your Google account, e.g. by going to [gmail](https://www.gmail.com).

2) Go to [https://script.google.com](https://script.google.com).

3) Add a new file (*File -> New -> Script file*) or edit `Code.gs`.

4) Copy the code from `autoreply.js` to your new script file.

5) Be sure to change the email addresses in your code, and possibly the
message (see line 4, *responsebody*) as well!

6) Set a timer, to have your script run automatically every now and again.
*Resources -> Current project's triggers -> Add a new trigger*

~~~
**Run**		**Events**
`ResponsEmail`	`Time-driven`	`Hour timer`	`Every hour`
~~~

7) Rejoice!
