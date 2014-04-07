function PersistentVector() {
  this.array = [].slice.call(arguments);
  this.length = this.array.length;
}

PersistentVector.prototype.get = function get(index) {
  return this.array[index];
};

PersistentVector.prototype.set = function set(index, val) {
  var newPV = new PersistentVector();
  newPV.array = this.array.slice();
  newPV.array[index] = val;
  newPV.length = newPV.array.length;
  return newPV;
};

PersistentVector.prototype.push = function push(val) {
  return this.set(this.length, val);
};

PersistentVector.prototype.pop = function pop(val) {
  return this.slice(0, this.length - 1);
};

PersistentVector.prototype.slice = function slice(begin, end) {
  var newPV = new PersistentVector();
  newPV.array = this.array.slice(begin, end);
  newPV.length = newPV.array.length;
  return newPV;
};

PersistentVector.prototype.equals = function equals(other) {
  if (this.length !== other.length) return false;
  // FIXME: should this throw if 'other' is not a PV?
  for (var i = 0; i < this.length; i++) {
    if (this[i] instanceof PersistentVector
      && other[i] instanceof PersistentVector) {
      if (!this[i].equals(other[i])) {
        return false;
      }
    } else {
      if (this[i] !== other[i]) return false;
    }
  }
  return true;
};

PersistentVector.prototype.toArray = function toArray() {
  return this.array.slice();
};

module.exports = PersistentVector;
