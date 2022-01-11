import AsciiTable from 'ascii-table';
import chalk from 'chalk';
import randomColor from 'randomcolor';

let colorOutput;
const userInput = process.argv;

if (userInput.length === 2) {
  colorOutput = randomColor();
} else if (userInput.length === 3) {
  const hueInput = userInput[2];
  colorOutput = randomColor({
    hue: hueInput,
  });
} else if (userInput.length === 4) {
  const hueInput = userInput[2];
  const lumInput = userInput[3];
  console.log(hueInput, lumInput);
  colorOutput = randomColor({
    luminosity: lumInput,
    hue: hueInput,
  });
}

const table = new AsciiTable('');
table
  .setBorder(' ')
  .addRow('########################')
  .addRow('########################')
  .addRow('########################')
  .addRow(`#####              #####`)
  .addRow(`#####    ${colorOutput}   #####`)
  .addRow(`#####              #####`)
  .addRow('########################')
  .addRow('########################')
  .addRow('########################');
console.log(chalk.hex(colorOutput)(table.toString()));
