class Test {
    private word = '';
    constructor(word: string) {
       this.word = word;
    }

    public check() {
        const arr = this.word.toLocaleLowerCase().split('').reverse();
        return (arr.join('') === this.word.toLocaleLowerCase());
    }

    public length() { 
        return this.word.length;
    }
}


const palindrome = new Test("Anna");
const isPalindrome = palindrome.check();
console.log(isPalindrome);
const wordLength = palindrome.length();
console.log(wordLength);