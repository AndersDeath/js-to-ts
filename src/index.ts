class Test {
    // private isPalindrome = false;
    private word = '';
    constructor(word: string) {
       this.word = word;
    }

    public check() {
        const arr = this.word.toLocaleLowerCase().split('').reverse();
        return (arr.join('') === this.word.toLocaleLowerCase());
    }
}


const palindrome = new Test("Anna");
const isPalindrome = palindrome.check();
console.log(isPalindrome)