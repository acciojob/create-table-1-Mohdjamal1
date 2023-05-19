function insert_Row() {
    const myTable = document.querySelector('#sampleTable');
	
	let tr = document.createElement('tr');
	const td1 = document.createElement('td');
	const td2 = document.createElement('td');
	td1.innerText = "NewCell1";
	td2.innerText = "NewCell2";
	tr.append(td1);
	tr.append(td2);
	myTable.insertBefore(tr,myTable.childNodes[0]);
}
  
