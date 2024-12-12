/**
 * Create a row for the companions table;
 * 
 * @param {Companion} companion 
 */
function createRow(companion){
    const table = document.getElementById('companions');
    const tbody = table.querySelector('tbody');
    const tableRow = document.createElement('tr');
    tbody.appendChild(tableRow);

    const name = createCell(tableRow);
    name.innerHTML = companion.Name();

    const area = createCell(tableRow);
    area.innerHTML = companion.area
   // TODO 7

    const action = createCell(tableRow)
    const button = document.createElement('button');
    button.innerHTML = 'Megtekint';
    action.appendChild(button)
    button.addEventListener('click', checkEventListener)
}

/**
 * Create a new td cell
 * 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createCell(parentElement){
    const newCell = document.createElement('td');
    parentElement.appendChild(newCell);
    return newCell;
}

/**
 * 
 * Append a new companion to the selector
 * 
 */
function appendToSelector(id, value){
    const productForm = document.getElementById('product')
    const selector = productForm.querySelector('#companionlist');

    const option = document.createElement('option');
    // TODO 11.
    option.value = id;
    option.innerHTML = value;
    selector.appendChild(option);
}


/**
 * 
 * Refresh the productlist table
 * 
 * @param {Companion} companion 
 */
function refreshProductList(companion){ //TODO

    const companionName = document.getElementById('companion_name');
    // TODO 10
    companionName.innerHTML = companion.Name();
    companionName.style.display = 'block';
    const productTable = document.getElementById('products');
    productTable.style.display = 'table';
    const productTableBody = productTable.querySelector('tbody')
    productTableBody.innerHTML = '';
    // TODO 10
    for (const product of companion.products) {
        const row = document.createElement('tr');
        const name = createCell(row);

        name.innerHTML = product;
        productTableBody.appendChild(row);
    }
}

/**
 * 
 * Add companion function for the companion formelement
 * 
 * @param {HTMLFormElement} form 
 */
function addCompanion(form){ //TODO 
    const firstName =form.querySelector('#cfirstname')
    const lastname =form.querySelector('#clastname')
    const area = form.querySelector('#carea')
    const firstNameValue = firstName.value;
    const lastNameValue = lastname.value;
    const areaValue = area.value;
    // TODO 6
    const companion_1 = new Companion(Factory.manoId(), firstNameValue, lastNameValue, areaValue);
    factory.addmano(companion_1);
}

/**
 * 
 * Add product function for the productformelement
 * 
 * @param {HTMLFormElement} form 
 */

function addProductForm(form, factory){ // TODO
    const selector =form.querySelector('#companionlist')
    const productName = form.querySelector('#productname')
    const companionId = selector.value;
    const product = productName.value;
    // 12
    if (companionId === '') {
        return; 
    }
    const companion = factory.companion(companionId);
    companion.Product(product);
}