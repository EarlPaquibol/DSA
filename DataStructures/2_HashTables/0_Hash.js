class HashTable {
    constructor (size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return "added successfully";
    }

    get(key){
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                //currentBucket[0] gets the first item in the array
                //EX. [["grapes", 1000], ["apples", "50"]], currentBucket[0] gets the ["grapes", 1000]
                //then currentBucket[0][1] returns 1000
                if (currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys(){
        let keysArray = [];
        for (let i = 0; i < this.data.length; i++){
            if (this.data[i]){
                if (this.data[i].length > 1){
                    for (let j = 0; j < this.data[i].length; j++){
                        keysArray.push(this.data[i][j][0]);
                    }
                } else {
                    keysArray.push(this.data[i][0][0]);
                }
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 1000);
myHashTable.set("lol", 69);
myHashTable.set("trial", 100);
myHashTable.get("grapes");
// console.log(myHashTable)
// console.log(myHashTable.get("grapes"));
myHashTable.keys();
console.log(myHashTable.keys());