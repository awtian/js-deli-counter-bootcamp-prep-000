var katzDeliLine = [];
function takeANumber(array, name) {
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
};

function nowServing(x) {
  if (x.length > 0) {
  return `Currently serving ${x[0]}.`
  x.shift()
}
else {
  return `There is nobody waiting to be served!`
};
};
function currentLine() {

}
