function showSalary(users, age) {
  let answer = "";

  for (let index in users) {
    if (users[index].age <= age) {
      answer += users[index].name + ", " + users[index].balance + "\n";
    }
  }
  return answer.slice(0, -1);
}