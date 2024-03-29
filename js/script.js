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

    item.addEventListener('input', function (e) {
        document.querySelectorAll('table').forEach((table) => {
            const checkbox = table.querySelector(`#${item.id}`);
            if (checkbox) {
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
openedWindow.on('change', function (e) {
    const checked = e.target.checked;
    if (checked) {
        mapImage[0].classList.add(none);
        mapImage[1].classList.remove(none);
        mapImage[2].classList.add(none);
    } else {
        mapImage[1].classList.add(none);
        mapImage[0].classList.remove(none);
        mapImage[2].classList.add(none);
    }
})

staticCheckbox.on('change', function (e) {
    const checked = e.target.checked;

    if (openedWindow.prop('checked')) {
        if (checked) {
            mapImage[0].classList.add(none);
            mapImage[1].classList.remove(none);
            mapImage[2].classList.add(none);
        } else {
            mapImage[0].classList.add(none);
            mapImage[1].classList.add(none);
            mapImage[2].classList.remove(none);
        }
    } else {
        if (checked) {
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

$('#close-select-info').on('click', function () {
    $('.select-info').removeClass(none);
    $('.billboard').addClass(none)
})


$('.map-image-3').on('click', function () {
    $('.select-info').addClass(none);
    $('.billboard').removeClass(none)
})

$('.select-action').on('click', function () {
    $('#one-row-action-table').removeClass(none);
    btnNext.removeClass('opacity-25').removeAttr('disabled')
})


$('.step-menu').on('click', function (e) {
    const index = +$(this).data('step');

    stepItem.addClass(none).get(index).classList.remove(none);

    navSteps.forEach((item, i) => {
        if (i < index) {
            item.classList.add('nav-step-successes')
        } else if (i === index) {
            item.classList.add('active')
        }
    })

})

const oneDay = Array.from({length: 24}).map(() => true);

const monthChecking = Array.from({length: 7}).map(() => oneDay)

monthChecking.forEach((item) => {
    $('#monty-body').append(`
      <div class="d-flex justify-content-between align-items-center gap-10">
        ${createRow(item)}
      </div>
    `)
})

function createRow(item) {
    return item.map((box) => `<label class="mt-1"><input type="checkbox" class="default-checkbox" checked="${box}"></label>`).join('')
}

const designTabBody = document.querySelectorAll('.design-tab-body');
const openCloseDesignTab = document.querySelectorAll('.openClose-design-tab');

openCloseDesignTab.forEach((item, index) => {
    item.addEventListener('click', function () {
        console.log(designTabBody[index])
        if (designTabBody[index].classList.contains(active)) {
            designTabBody[index].classList.remove(active)
        } else {
            designTabBody[index].classList.add(active)
        }
    })
})

const chrt = document.getElementById("chartId")?.getContext("2d");
if (chrt) {
    const chartId = new Chart(chrt, {
        type: 'line',
        data: {
            labels: [
                '24 июл',
                '31 июл',
                '7 авг',
                '14 авг',
                '21 авг',
                '28 авг',
                '4 сен',
                '11 сен',
                '18 сен',
                '25 сен',
                '2 окт',
                '9 окт',
                '16 окт',
            ],
            datasets: [{
                label: "online tutorial subjects",
                data: [0, 400, 800, 1200, 200, 556, 687, 493, 466, 322, 933, 566, 877],
                backgroundColor: ['#2E9F65'],
                borderColor: ['#2E9F65'],
                borderWidth: 2,
                pointRadius: 5,
            }],
        },
        options: {
            responsive: false,
        },
    });
}




