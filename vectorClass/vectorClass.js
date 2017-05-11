class Vector {
  constructor(components) {
    this.components = components;
  }

  add(vector) {
    if (vector.components.length != this.components.length) {
      throw 'Error';
    } else {
      var returnVec = [];
      for (var i = 0; i < vector.components.length; i++) {
        returnVec[i] = vector.components[i] + this.components[i];
      }
      return new Vector(returnVec);
    }
  }

  subtract(vector) {
    if (vector.components.length != this.components.length) {
      throw 'Error';
    } else {
      var returnVec = [];
      for (var i = 0; i < vector.components.length; i++) {
        returnVec[i] = this.components[i] - vector.components[i];
      }
      return new Vector(returnVec);
    }
  }

  dot(vector) {
    if (vector.components.length != this.components.length) {
      throw 'Error';
    } else {
      var returnVec = 0;
      for (var i = 0; i < vector.components.length; i++) {
        returnVec += this.components[i] * vector.components[i];
      }
      return returnVec;
    }
  }

  norm() {
    var returnVec = 0;
    for (var i = 0; i < this.components.length; i++) {
      returnVec += Math.pow(this.components[i], 2);
    }
    return Math.sqrt(returnVec);
  }

  toString() {
    return '('+this.components+')';
  }

  equals(vector) {
    if (vector.components.length != this.components.length) {
      return false;
    } else {
      var returnVec = true;
      for (var i = 0; i < vector.components.length; i++) {
        if (this.components[i] != vector.components[i]) {
          return returnVec = false;
        }
      }
      return returnVec;
    }
  }
}

// Final Refactor
class Vector {
  constructor(components) {
    this.components = components;
  }

  throwErr(vector){
    if (vector.components.length != this.components.length) {
      throw 'Error';
    }
  }

  add(vector) {
    this.throwErr(vector);
    var returnVec = [];
    for (var i = 0; i < vector.components.length; i++) {
      returnVec[i] = vector.components[i] + this.components[i];
    }
    return new Vector(returnVec);
  }

  subtract(vector) {
    this.throwErr(vector);
    var returnVec = [];
    for (var i = 0; i < vector.components.length; i++) {
      returnVec[i] = this.components[i] - vector.components[i];
    }
    return new Vector(returnVec);
  }

  dot(vector) {
    this.throwErr(vector);
    var returnVec = 0;
    for (var i = 0; i < vector.components.length; i++) {
      returnVec += this.components[i] * vector.components[i];
    }
    return returnVec;
  }

  norm() {
    var returnVec = 0;
    for (var i = 0; i < this.components.length; i++) {
      returnVec += Math.pow(this.components[i], 2);
    }
    return Math.sqrt(returnVec);
  }

  toString() {
    return '('+this.components+')';
  }

  equals(vector) {
    if (vector.components.length != this.components.length) {
      return false;
    } else {
      var returnVec = true;
      for (var i = 0; i < vector.components.length; i++) {
        if (this.components[i] != vector.components[i]) {
          return returnVec = false;
        }
      }
      return returnVec;
    }
  }
}
