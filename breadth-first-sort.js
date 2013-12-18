//breadth-first sort in JavaScript
//used for a graph search
//visit each node and get access to each node connected to each visited node
//use a queue data structure to store intermediate results as we traverse the graph
//Enqueue the root node
//Dequeue a node and examine it
//If the element sought is found in this node, quit the search and return a result.
//Otherwise enqueue any successors (the direct child nodes) that have not yet been discovered.
//If the queue is empty, every node on the graph has been examined – quit the search and return "not found".
//If the queue is not empty, repeat from Step 2.

