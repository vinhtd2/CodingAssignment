class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}



var array = [6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5];
var BTS = new BinarySearchTree();
for (var i = 0; i < array.length; i++) {


    BTS.root = new Node(array[0]);
    BTS.root.left = new Node(array[1]);
    BTS.root.right = new Node(array[2]);

    BTS.root.left.left = new Node(array[3]);
    BTS.root.left.right = new Node(array[4]);
    BTS.root.right.left = new Node(array[5]);
    BTS.root.right.right = new Node(array[6]);

    BTS.root.left.left.left = new Node(array[7]);
    BTS.root.left.left.right = new Node(array[8]);
    BTS.root.left.right.left = new Node(array[9]);
    BTS.root.left.right.right = new Node(array[10]);
    BTS.root.right.left.left = new Node(array[11]);
    BTS.root.right.left.right = new Node(array[12]);
    BTS.root.right.right.left = new Node(array[13]);
    BTS.root.right.right.right = new Node(array[14]);

};

var sum = 0;

function calculatingSumOfNodes(node) {
    if (node !== null) {
        if (node.data % 2 == 0) {
            if(node.left) {
                if(node.left.left) {
                    sum = sum + node.left.left.data;
                }
                if(node.left.right) {
                    sum = sum + node.left.right.data;
                }
            }
            if(node.right) {
                if(node.right.left) {
                    sum = sum + node.right.left.data;
                }
                if(node.right.right) {
                    sum = sum + node.right.right.data;
                }
            }
        }
        calculatingSumOfNodes(node.left);
        calculatingSumOfNodes(node.right);
    }
}

calculatingSumOfNodes(BTS.root);
console.log("The sum of values of nodes with even-valued grandparent: ", sum);

/*
LOGIC: 
    - Firsty, I set sum is 0 and  apply pre-order traversal process to calculate the sum.
    - To start with the root node, if the root is even, I will set the condition that if the child of root
and the grandchild of root are not null, I will add the value of the grandchild to sum.
    - Continuously, I apply the relevent process for the left node and right node of the root node.
PERFORMANCE:
    - BigO(n) in the worst case.
*/