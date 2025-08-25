const boxes = [1, 2, 3, 4, 5];

function getPairs(boxes) {
    for (let x = 0; x < boxes.length; x++){ //O(n)
        for (let i = 0; i < boxes.length; i++ ){ //O(n)
            console.log(boxes[x],boxes[i]);
        }
    }
}

getPairs(boxes);

//Big O notation = O(n^2)