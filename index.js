const table = document.getElementById('table');

let log = console.log;
let up='arrow_drop_up';
let down='arrow_drop_down';
const sortTableByColumn = (table, column, asc = true) => {
    let sort = asc ? 1 : -1;
    let rows = Array.from(table.tBodies[0].querySelectorAll(`tr `));

    rows.sort((a, b) => {
        let aCell = a.querySelector(`td:nth-child(${column})`).textContent.trim();
        let bCell = b.querySelector(`td:nth-child(${column})`).textContent.trim();
        return aCell > bCell ? 1 * sort : -1 * sort;
    });

    table.tBodies[0].querySelectorAll(`tr `).forEach(element => {
        table.tBodies[0].removeChild(element);
    });

    table.tBodies[0].append(...rows);
}

let thead = table.querySelectorAll('thead tr th');
thead.forEach((el, index) => {
    el.addEventListener('click', (e) => {
      
        let isAsc=el.querySelector('i').textContent=='arrow_drop_down' ? true :false;
        sortTableByColumn(table, index + 1, isAsc);

        table.querySelectorAll('thead tr th i').forEach((i)=>{
            if (i.textContent == 'arrow_drop_down') {
                i.textContent = 'arrow_drop_up';
            } else {
                i.textContent= 'arrow_drop_down';
            }
        })

    });

})