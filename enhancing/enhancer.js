module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const success = item.enhancement + 1
  if (item.enhancement === 20) {
    return item
  }
  return { ...item, enhancement:  success};
}

function fail(item) {
  const failure = item.durability - 5
  const failure_2 = item.durability - 10
  const failure_3 = item.enhancement - 1

  if (item.enhancement < 15) {
    return ({ ...item, durability: failure })
  } else if (item.enhancement >= 15) {
    return ({ ...item, durability: failure_2 })
  } else if (item.enhancement > 16) {
    return ({ ...item, enhancement: failure_3 })
  } else {
    return { ...item, };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
