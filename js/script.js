const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}


const {
    selectAllCheckbox
} = {
    selectAllCheckbox: document.querySelectorAll('.select-all-table')
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