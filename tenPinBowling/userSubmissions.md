[MMMAAANNN](https://www.codewars.com/users/MMMAAANNN)
```js
function bowlingScore(frames) {
  var rolls = frames.replace(/ /g, '').split(''),
      count = 0,
      score = 0,
      frame;
  for (var i = 0; i < rolls.length; i++) {
    if (rolls[i] === 'X') rolls[i] = 10;
    if (rolls[i] === '/') rolls[i] = 10 - rolls[i - 1];
    else rolls[i] = parseInt(rolls[i]);
  }
  while (count < 10) {
    count++;
    frame = rolls.shift();
    if (frame === 10) score += frame + rolls[0] + rolls[1];        // Strike!!
    else {
      frame += rolls.shift();
      score += frame;
      if (frame === 10) score += rolls[0];                         // Spare!
    }
  }
  return score;
}
```
[jegan145](https://www.codewars.com/users/jegan145)
```js
function bowlingScore(framesString) {
  const balls = framesString.replace(/ /g, '').split('')

  let totalScore = 0
  for (let i = 0, frame = 0; i < balls.length && frame < 10; frame++ ) {    
    totalScore += _frameScore(balls[i], balls[i + 1], balls[i + 2])
    if (balls[i] === 'X') i += 1
    else i += 2
  }

  return totalScore
}

function _frameScore(ball1, ball2, ball3) {
  if (ball1 === 'X') return 10 + _twoBallScore(ball2, ball3)
  if (ball2 === '/') return 10 + _nextBallScore(ball3)
  return _twoBallScore(ball1, ball2)
}

function _twoBallScore(ball1, ball2) {
  return ball2 === '/' ? 10 : _nextBallScore(ball1) + _nextBallScore(ball2)
}

function _nextBallScore(ball) {
  return ball === 'X' ? 10 : parseInt(ball)
}
```
[vespaiach](https://www.codewars.com/users/vespaiach)
```js
function bowlingScore(str) {
  const rolls = str.replace(/\s/g, '').split('');
  const scores = rolls.map((roll, i) => roll === 'X' ? 10 : roll === '/' ? 10 - parseInt(rolls[i - 1]) : parseInt(roll));
  const max = rolls.length - str.substring(str.lastIndexOf(' ') + 1).length;

  return rolls.reduce((total, val, i) => {
    if (i < max) {
      if (val === 'X') {
        total += scores[i] + scores[i + 1] + scores[i + 2];
      } else if (val === '/') {
        total += scores[i] + scores[i + 1];
      } else {
        total += scores[i];
      }
    } else {
      total += scores[i];
    }

    return total;
  }, 0);
}
```
