const listItems = document.querySelectorAll("#list li");
const tableWrapper = document.querySelectorAll(".table");

//tr 보이기, 가리기 구현
function handleToggleTableRows(clickedYear) {
  tableWrapper.forEach(item => {
    item.classList.remove("show-table");

    if(item.getAttribute("data-year") === clickedYear) {
      item.classList.add("show-table");
    }
  });
}

//연도 클릭 구현
function handleClickList(event) {
  listItems.forEach(item => {
    if(item.classList.contains("list-active")) {
      item.classList.remove("list-active");
    }
  });
  localStorage.removeItem("clickedItem");
  const clickedItem = event.target;
  localStorage.setItem("clickedItem", clickedItem.innerHTML);
  clickedItem.classList.toggle("list-active");  
  
  // 연도별 테이블 관련 조작
  handleToggleTableRows(clickedItem.innerHTML);
};

listItems.forEach(item => {
  item.addEventListener("click", handleClickList);
});

console.log(tableWrapper);