const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}


const {
    selectAllCheckbox,
    phoneMask,
    mapImage,
    openedWindow,
    staticCheckbox,
    btnNext,
    stepItem,
    navSteps
} = {
    selectAllCheckbox: document.querySelectorAll('.select-all-table'),
    phoneMask: document.querySelectorAll('input.input-mask'),
    mapImage: document.querySelectorAll('.map-image'),
    navSteps: document.querySelectorAll('.nav-steps'),
    openedWindow: $('#opened-window'),
    staticCheckbox: $('#static-checkbox'),
    btnNext: $('#btn-next'),
    stepItem: $('.step-item')
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

$('select').multipleSelect({
    formatSelectAll: () => 'Выбрать все',
    formatAllSelected: () => 'Все выбрано',
    formatCountSelected: (count, total) => `${count} из ${total} выбрано`,
})


// ACTION PAGE UI FUNCTIONAL
openedWindow.on('change', function (e){
    const checked = e.target.checked;
    if(checked){
        mapImage[0].classList.add(none);
        mapImage[1].classList.remove(none);
        mapImage[2].classList.add(none);
    } else {
        mapImage[1].classList.add(none);
        mapImage[0].classList.remove(none);
        mapImage[2].classList.add(none);
    }
})

staticCheckbox.on('change', function (e){
    const checked = e.target.checked;

    if(openedWindow.prop('checked')){
        if(checked){
            mapImage[0].classList.add(none);
            mapImage[1].classList.remove(none);
            mapImage[2].classList.add(none);
        } else {
            mapImage[0].classList.add(none);
            mapImage[1].classList.add(none);
            mapImage[2].classList.remove(none);
        }
    } else {
        if(checked){
            mapImage[0].classList.remove(none);
            mapImage[1].classList.add(none);
            mapImage[2].classList.add(none);
        } else {
            mapImage[0].classList.add(none);
            mapImage[1].classList.add(none);
            mapImage[2].classList.remove(none);
        }
    }
})

$('#close-select-info').on('click', function (){
    $('.select-info').removeClass(none);
    $('.billboard').addClass(none)
})


$('.map-image-3').on('click', function (){
    $('.select-info').addClass(none);
    $('.billboard').removeClass(none)
})

$('.select-action').on('click', function (){
    $('#one-row-action-table').removeClass(none);
    btnNext.removeClass('opacity-25').removeAttr('disabled')
})


$('.step-menu').on('click', function (e){
    const index = +$(this).data('step');

    stepItem.addClass(none).get(index).classList.remove(none);

    navSteps.forEach((item, i) => {
        if(i < index){
            item.classList.add('nav-step-successes')
        } else if(i === index){
            item.classList.add('active')
        }
    })
    // stepItem.forEach((item, i) => {
    //     if(i === index){
    //         $(item).removeClass(none);
    //     } else{
    //         $(item).addClass(none);
    //     }
    // })
})


