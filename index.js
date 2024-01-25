import readlineSync from 'readline-sync/lib/readline-sync.js';

const calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    const a = readlineSync.question('Set the first parameter ');
    const b = readlineSync.question('Set the second parameter ');
  }
};

