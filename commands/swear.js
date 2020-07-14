bot.on("message", message => {
    //Here you can put banned words and swearwords in the quotation marks "here"
    const swearWords = ["testtt", "word", "word", "word", "word", "word", "word", "word"];
    if( swearWords.some(word => message.content.includes(word)) ) {
      message.reply("This word is banned by the server owner");
      
    }} )
