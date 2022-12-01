function namify(users) {
  let answer = [];
  for (let i = 0; i < users.length; i += 1) {
    answer.push(users[i].name);
  }
  return answer;
}
