function checkHavedes1Click() {
    const havedes1Checkbox = document.getElementById('Minor');
    havedes1Checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('Major').checked = false
            document.getElementById('Oncologic').checked = false
        }
    });
}
function checkHavedes2Click() {
    const havedes1Checkbox = document.getElementById('Major');
    havedes1Checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('Minor').checked = false
            document.getElementById('Oncologic').checked = false
        }
    });
}
function checkHavedes3Click() {
    const havedes1Checkbox = document.getElementById('Oncologic');
    havedes1Checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('Major').checked = false
            document.getElementById('Minor').checked = false
        }
    });
}
document.addEventListener('DOMContentLoaded', checkHavedes1Click);
document.addEventListener('DOMContentLoaded', checkHavedes2Click);
document.addEventListener('DOMContentLoaded', checkHavedes3Click);

function checkSurgery1Click() {
    const havedes1Checkbox = document.getElementById('surgeryMinor');
    havedes1Checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('surgeryMajor').checked = false
        }
    });
}
function checkSurgery2Click() {
    const havedes1Checkbox = document.getElementById('surgeryMajor');
    havedes1Checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('surgeryMinor').checked = false
        }
    });
}
document.addEventListener('DOMContentLoaded', checkSurgery1Click);
document.addEventListener('DOMContentLoaded', checkSurgery2Click);

function checkTypeOparation1Click() {
    const havedes1Checkbox = document.getElementById('TypeOparation1');
    havedes1Checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('TypeOparation2').checked = false
        }
    });
}
function checkTypeOparation2Click() {
    const havedes1Checkbox = document.getElementById('TypeOparation2');
    havedes1Checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('TypeOparation1').checked = false
        }
    });
}
document.addEventListener('DOMContentLoaded', checkTypeOparation1Click);
document.addEventListener('DOMContentLoaded', checkTypeOparation2Click);

function checkfrsClick() {
    const havedes1Checkbox = document.getElementById('NotHavedes');
    havedes1Checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('Havedes1').checked = false
            document.getElementById('Havedes2').checked = false
            document.getElementById('Havedes3').checked = false
            document.getElementById('Havedes4').checked = false
            document.getElementById('Havedes5').checked = false
        }
    });

    const ab1 = document.getElementById('Havedes1');
    ab1.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('NotHavedes').checked = false
        }
    });

    const ab2 = document.getElementById('Havedes2');
    ab2.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('NotHavedes').checked = false
        }
    });

    const ab3 = document.getElementById('Havedes3');
    ab3.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('NotHavedes').checked = false
        }
    });

    const ab4 = document.getElementById('Havedes4');
    ab4.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('NotHavedes').checked = false
        }
    });

    const ab5 = document.getElementById('Havedes5');
    ab5.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('NotHavedes').checked = false
        }
    });
}
document.addEventListener('DOMContentLoaded', checkfrsClick);

function checkNoPillClick() {
    const havedes1Checkbox = document.getElementById('NotHavepill');
    havedes1Checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('Havepill').checked = false
        }
    });

    const havedes2Checkbox = document.getElementById('Havepill');
    havedes2Checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.getElementById('NotHavepill').checked = false
        }
    });
}
document.addEventListener('DOMContentLoaded', checkNoPillClick);