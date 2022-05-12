let mylist = document.getElementById('mylist');
const headline = document.getElementById('headline');
const month = document.getElementById('month');
const text = document.getElementById('text');


function showtxt() {
    console.log(mylist.value);
    switch (mylist.value) {
        case '1':
            console.log('Case1');
            headline.innerHTML = 'ARIES';
            month.innerHTML = 'Mar';
            text.innerHTML = 'Today your patience might be tested when one or more of your projects gets put on hold by someone… ';
            link.innerHTML = '<img src="https://www.horoscopedates.com/img/icon_aries.png">';
            break;
        case '2':
            console.log('Case2');
            headline.innerHTML = 'TAURUS';
            month.innerHTML = 'Apr';
            text.innerHTML = 'Your intense energy makes you a great candidate for a leadership position right now, so if you are…';
            link.innerHTML = '<img src="https://www.horoscopedates.com/img/icon_taurus.png">';
            break;
        case '3':
            console.log('Case3');
            headline.innerHTML = 'GEMINI';
            month.innerHTML = 'May';
            text.innerHTML = 'If you aren´t sure if you are ready to commit to a party, a date, a new job, or anything else that… ';
            link.innerHTML = '<img src="https://www.horoscopedates.com/img/icon_gemini.png">';
            break;
        case '4':
            console.log('Case4');
            headline.innerHTML = 'CANCER';
            month.innerHTML = 'Jun';
            text.innerHTML = 'Too many different elements in your life are overlapping with each other right now—and it´s your…';
            link.innerHTML = '<img src="https://www.horoscopedates.com/img/icon_cancer.png">';
            break;
        case '5':
            console.log('Case5');
            headline.innerHTML = 'LEO';
            month.innerHTML = 'Jul';
            text.innerHTML = 'The issues you´ll be dealing with today are very complicated ones—you will have to navigate your…';
            link.innerHTML = '<img src="https://www.horoscopedates.com/img/icon_leo.png">';
            break;
        case '6':
            console.log('Case6');
            headline.innerHTML = 'VIRGO';
            month.innerHTML = 'Aug';
            text.innerHTML = 'You´ll get along best with people who appeal to your more analytical side, today. Surprisingly, all…';
            link.innerHTML = '<img src="https://www.horoscopedates.com/img/icon_virgo.png">';
            break;
        case '7':
            console.log('Case7');
            headline.innerHTML = 'LIBRA';
            month.innerHTML = 'Sep';
            text.innerHTML = 'Pick a cultural event thats coming up and get some tickets for it today.';
            link.innerHTML = '<img src="https://www.horoscopedates.com/img/icon_libra.png">';
            break;
        case '8':
            console.log('Case8');
            headline.innerHTML = 'SCORPIO';
            month.innerHTML = 'Oct';
            text.innerHTML = 'Someone will challenge a belief that you´ve held for a very long time today—and they will say an…';
            link.innerHTML = '<img src="https://www.horoscopedates.com/img/icon_scorpio.png">';
            break;
        case '9':
            console.log('Case9');
            headline.innerHTML = 'SAGITTARIUS';
            month.innerHTML = 'Nov';
            text.innerHTML = 'Someone in your life needs to step up and take on more responsibility—and you need to tell them to....';
            link.innerHTML = '<img src="https://www.horoscopedates.com/img/icon_sagittarius.png">';
            break;
        case '10':
            console.log('Case10');
            headline.innerHTML = 'CAPRICORN';
            month.innerHTML = 'Dec';
            text.innerHTML = 'Breaking the rules is not always a bad thing—especially if the rules limit your creativity. ';
            link.innerHTML = '<img src="https://www.horoscopedates.com/img/icon_capricorn.png">';
            break;
        case '11':
            console.log('Case11');
            headline.innerHTML = 'AQUARIUS';
            month.innerHTML = 'Jan';
            text.innerHTML = 'Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…';
            link.innerHTML = '<img src="https://www.horoscopedates.com/img/icon_aquarius.png">';
            break;
        case '12':
            console.log('Case12');
            headline.innerHTML = 'PISCES';
            month.innerHTML = 'Feb';
            text.innerHTML = 'Communication is very important today—written, spoken, and even nonverbal body language will all…';
            link.innerHTML = '<img src="https://www.horoscopedates.com/img/icon_pisces.png">';
            break;

        default:
            console.log('Case undefined');
            masse.innerHTML = '<b>Extra große Größe</b>'
            break;
    }
}