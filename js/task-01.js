const findItemNum = document.querySelectorAll('.item');
console.log(`В списке ${findItemNum.length} категории.`);

const valueArray = [...findItemNum]
  .map(item => `Категория: ${item.children[0].textContent}
Количество элементов: ${item.children[1].children.length}`
  )
  .join('\n');
console.log(valueArray);

===================================
const findItemNum = document.querySelectorAll('.item');
  
const logItemsLength = (items) => {
  console.log(`В списке ${items.length} категории.`);
}

findItemNum.forEach(item => {
    console.log(`Категория: ${item.children[0].textContent}`)
    console.log(`Количество элементов: ${item.children[1].children.length}`)
});


