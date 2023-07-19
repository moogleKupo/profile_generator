const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {
  console.log(`My name is ${answer1}`);

  rl.question("What's an activity you like doing?", (answer2) => {
    console.log(`I absolutely love to ${answer2}`);

    rl.question("What do you listen to while doing that?", (answer3) => {
      console.log(`While ${answer2}, I like to listen to ${answer3}`);

      rl.question("Which meal is your favourite?", (answer4) => {
        console.log(`My favourite meal of the day is ${answer4}`);

        rl.question("What is your favourite thing to eat during that meal?", (answer5) => {
          console.log(`My favourite thing to eat during ${answer4} is ${answer5}`);

          rl.question("Which sport is your favourite?", (answer6) => {
            console.log(`${answer6} is my favourite sport`);

            rl.question("What is your superpower?", (answer7) => {
              console.log(`My superpower is coding and ${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
