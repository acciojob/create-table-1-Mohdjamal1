function insert_Row() {
    const myTable = documen.querySelector('#sampleTable');
	
	let tr = document.createElement('tr');
	const td1 = document.createElement('td');
	const td2 = document.createElement('td');
	td1.innerText = "New Cell1";
	td2.innerText = "New Cell2";
	tr.append(td1);
	tr.append(td2);
	myTable.append(tr);
}
  
