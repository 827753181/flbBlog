//其实感觉就是for循环啊

function each(obj, cb) {
  var value;
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; ++i) {
      value = cb.call(obj[i], i, obj[i]);

      if (value === false) {
        break;
      }
    }
  } else {
    for (var j in obj) {
      value = cb.call(obj[j], j, obj[j]);

      if (value === false) {
        break;
      }
    }
  }
}
each([1, 2, 3], function (index, value) {
  console.log(index, value);
});
each({ a: 1, b: 2 }, function (index, value) {
  console.log(index, value);
});
function year2000() {
  var year = new Date().getFullYear();

  if (year <= 2000) {
    console.log("A");
  }

  return false;
}

function year2100() {
  var year = new Date().getFullYear();

  if (year >= 2100) {
    console.log("C");
  }

  return false;
}

function year() {
  var year = new Date().getFullYear();

  if (year > 2000 && year < 2100) {
    console.log("B");
  }

  return false;
}

function iteratorYear(...args) {
  for (var i = 0; i < args.length; ++i) {
    var ret = args[i]();

    if (ret !== false) {
      return ret;
    }
  }
}

var manager = iteratorYear(year2000, year2100, year); // B
