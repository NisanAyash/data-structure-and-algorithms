class Trie {
    map: { [key: string]: Trie } = {};
    isWord: boolean = false;

    constructor() { }

    insert(word: string): void {
        this.add(word, 0, this)
    }

    search(word: string): boolean {
        return this.find(word, 0, this)
    }

    add(word: string, index: number, letterMap: Trie): void {
        if (index == word.length) {
            letterMap.isWord = true
            return;
        }
        if (!letterMap.map[word.charAt(index)]) {
            letterMap.map[word.charAt(index)] = new Trie()
        }
        return this.add(word, index + 1, letterMap.map[word.charAt(index)])
    }

    find(word: string, index: number, letterMap: Trie): boolean {
        if (index == word.length) {
            if (letterMap.isWord) {
                return true
            }
            return false
        }
        if (letterMap.map[word[index]]) {
            return this.find(word, index + 1, letterMap.map[word.charAt(index)])
        }
        return false
    }
}

const trie = new Trie();

trie.insert('word')
trie.insert('sample')


console.log(trie.search('word'))