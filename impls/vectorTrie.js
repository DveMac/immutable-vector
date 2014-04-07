var _slice = Array.prototype.slice,
  BITS = 2,
  WIDTH = 1 << BITS, // 2^5 = 32
  MASK = WIDTH - 1,
  RADIX = 7;


function assoc(vec, key, val) {
  // To update an element,
  // we would have to walk the tree down

  // to the leaf node
  // where the element is place.
  // While we walk down, we copy the nodes on our path
  // to ensure persistence.
  // When we've gotten down to the leaf node,
  // we copy it
  // and replace the value we wanted to replace with the new value.
  // We then return the new vector with the modified path.
}


function lookup(key) {
  var node = this.root;

  // perform branching on internal nodes here
  for (var size = this.depth; size > 1; size /= RADIX) {
    node = node[(key / size) % RADIX];
    // If node may not exist, check if it is null here
  }

  // Last element is the value we want to lookup, return it.
  return node[key % RADIX];
}

function PersistentVector() {
  var
    len, i, depth = 0,
    nodesTemp = [],
    nodes = _slice.call(arguments)
    ;

  while (nodes.length > 1) {
    len = nodes.length;
    i = 0;
    nodesTemp = nodes;
    nodes = [];
    depth += 1;
    for (; i < len; i += WIDTH) {
      nodes.push(_slice.call(nodesTemp, i, i + WIDTH));
    }
  }

  this.depth = depth;
  this.root = nodes[0];
}

PersistentVector.prototype.lookup = lookup;

PersistentVector.prototype.get = function get(index) {

};

PersistentVector.prototype.set = function set(index, val) {

};

PersistentVector.prototype.push = function push(val) {

};

PersistentVector.prototype.pop = function pop(val) {

};

PersistentVector.prototype.slice = function slice(begin, end) {

};

PersistentVector.prototype.equals = function equals(other) {

};

PersistentVector.prototype.toArray = function toArray() {

};

module.exports = PersistentVector;
