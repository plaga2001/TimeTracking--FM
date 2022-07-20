let daily = document.getElementById('daily').addEventListener('click', () => {
    data("daily")
});

let weekly = document.getElementById('weekly').addEventListener('click', () => {
    data("weekly")
});

let monthly = document.getElementById('monthly').addEventListener('click', () => {
    data("monthly")
});


const data = async (change) => {
    try{
        const res = await fetch('../data.json')
        if (res.status === 200) {
            const dataJSON = await res.json()
            const current = document.querySelectorAll('.hrs'),
            previus = document.querySelectorAll('.spanhrs'),
            titleCard = document.querySelectorAll('.titleCard');

            for (let i = 0; i < current.length; i++) {
                titleCard[i].innerHTML = `${dataJSON[i].title}`;
                current[i].innerHTML = `${dataJSON[i].timeframes[`${change}`].current}hrs`;
                previus[i].innerHTML = `Last ${lastHrs(change)} - ${dataJSON[i].timeframes[`${change}`].previous}hrs`;
            }
        }
    }catch(err){
        alert(err);
    }
}

function lastHrs(date){
    if (date == 'daily') {
        return 'Day'
    }else if(date == 'weekly'){
        return 'Week'
    }else if(date == 'monthly'){
        return 'Month'
    }
}

const menu = document.getElementById('menuButton').addEventListener('click', () => {
    edit = document.querySelector('.menu');
    if(edit.classList.contains('menu2')){
        edit.classList.remove('menu2')
    }else{
        edit.classList.add('menu2')
    }
})