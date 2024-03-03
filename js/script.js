const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}


const {
    selectAllCheckbox,
    phoneMask
} = {
    selectAllCheckbox: document.querySelectorAll('.select-all-table'),
    phoneMask: document.querySelectorAll('input.input-mask')
}

selectAllCheckbox?.forEach((item) => {
    item.id = `tableId_${Math.floor(Math.random() * 100)}`;

    item.addEventListener('input', function (e){
        document.querySelectorAll('table').forEach((table) => {
            const checkbox = table.querySelector(`#${item.id}`);
            if(checkbox){
                if (e.currentTarget.checked) {
                    table.querySelectorAll('input[type="checkbox"]').forEach((inpCheck) => inpCheck.checked = true)
                } else {
                    table.querySelectorAll('input[type="checkbox"]').forEach((inpCheck) => inpCheck.checked = false)
                }
            }
        })

    })
})

// INOUT MASK PHONE

phoneMask.forEach((item) => {
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    IMask(item, maskOptions);
})


const checkboxes = document.querySelectorAll('.input-indeterminate');

checkboxes.forEach((input) => {
    input.indeterminate = true;
})

