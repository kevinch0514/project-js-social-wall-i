function toggle(val, first, second) {
  if (val === first) {
    return second;
  } else {
    return first;
  }
}

module.exports = {
  toggle
}
