let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let ChooseExpense = document.querySelector("#expense").value;
  let description = document.querySelector("#description").value;
  let category = document.querySelector("#category").value;
  let obj = {
    Expense: ChooseExpense,
    desc: description,
    cate: category
  };
  let sobj = JSON.stringify(obj);
  localStorage.setItem(ChooseExpense, sobj);
  let li = document.createElement("li");
  let resObj = JSON.parse(localStorage.getItem(ChooseExpense));
  let res = Object.values(resObj).join("-");
  let testNode = document.createTextNode(res);
  li.append(testNode);
  let deleteExpense = document.createElement("button");
  deleteExpense.innerHTML = "Delete";
  deleteExpense.className = "Delete";
  let editExpense = document.createElement("button");
  editExpense.innerHTML = "Edit";
  editExpense.className = "Edit";
  li.append(deleteExpense);
  li.append(editExpense);
  document.querySelector("ul").append(li);
  deleteExpense.addEventListener("click", () => {
    li.remove();
    localStorage.removeItem(ChooseExpense);
    if(document.querySelectorAll('li').length==0){
        location.reload();
    }
  });

  editExpense.addEventListener("click", () => {
    // Replace the text content of the li element with input fields
    const inputExpense = document.createElement("input");
    inputExpense.value = ChooseExpense;
    const inputDesc = document.createElement("input");
    inputDesc.value = description;
    const inputCate = document.createElement("input");
    inputCate.value = category;

    li.textContent = "";
    li.appendChild(inputExpense);
    li.appendChild(inputDesc);
    li.appendChild(inputCate);

    // Create a save button
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.className = "Save";
    saveButton.addEventListener("click", () => {
      // Update the data array with the new values
      obj.Expense = inputExpense.value;
      obj.desc = inputDesc.value;
      obj.cate = inputCate.value;
      // Update localStorage
      localStorage.setItem(ChooseExpense, JSON.stringify(obj));
      // Update the text content of the li element
      li.textContent = `${obj.Expense}: ${obj.desc} - ${obj.cate}`;
      // Remove the save button
      saveButton.remove();
    });

    // Append the save button to the li element
    li.appendChild(saveButton);
  });
});
