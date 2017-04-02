function findNb(m) {
    var volume = 0;
    var i = 1;
    while (volume <= m) {
      volume += Math.pow(i, 3);
      if(volume == m) {
        return i;
      } else {
        i++;
      }
    };
    return (-1);
}
