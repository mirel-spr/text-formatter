function countClicks() {
  let count = document.getElementById('countInput').value;
  if (!count) {
    count = 0;
  }
  count ++;
  document.getElementById('countInput').value = count;
}

function applyFormattingRules() {
  let text = document.getElementById('maintextbox').value;
  document.getElementById('othertextbox').value = text;
}
