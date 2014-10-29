function RespondEmail(e) {

  // set response mail
  // be sure to change 'MyOldAddress@gmail.com' to your actual old address.
  // be sure to change 'MyNewAddress@gmail.com' to your actual new address.
  var responsebody = "My MyOldAddress@gmail.com address has become obsolete. Please send your messages to MyNewAddress@gmail.com in the future.";

  //send response email
  // be sure to change 'MyOldAddress@gmail.com' to your actual old address.
  var threads = GmailApp.search("to:(MyOldAddress@gmail.com) label:unread");
  for (var i = 0; i < threads.length; i++) {
    // be sure to change 'MyNewAddress@gmail.com' to your actual new address.
    threads[i].reply("", {htmlBody: responsebody, from: "MyNewAddress@gmail.com"});}

  // mark all as read
  var threads = GmailApp.search("to:(MyOldAddress@gmail.com) label:unread");
  GmailApp.markThreadsRead(threads);
}
