// реализовать смену статусаи логровать будем только её
// текст с телеграмма: У меня переменных очень много, я их сделал потому что при работе программы и при вызове фунции проходит больше 80 млс. Я так понимаю, что по задумке я должен просто взаимодействовать со временем концом выполнения(у меня это time) и с Date.now(), но там получается неточности из-за того что больше 80 секунд программа берёт на выполнение. Поэтому время просто в переменную складываю time_start. Я так понял, что всё должно быть на setTimeout основано, да? Получается тогда мы допускаем погрешность. Например черепашке нужно пробежать 500 млс. но к каждому проходу setTimeout будет прибавлятся не 80, а чуть больше и получается неточность. У меня черепаха бежит 500 метров в 80 млс потому-что 15 минут = 80 млс(320/15), а 15 минут это 500 метров. Как-то так
export default class Turtle {
// бежать и спать
    name = ""
    long = 0;
    status = false;
    time = 0; // время когда действие должно закончится
    menu = "Черепаха появилась!";
    energy = 1;
    time_start = 0; // сколько будет длится действие
    all_time = 0; // чтобы выводить сколько времени потребовалось всего.
    dop = 0;
// 
    constructor(name) {
        this.name = name;
    }

    getRandomInt(max, from) {
        return Math.floor(Math.random() * (max - from) + from);
    }


    run() {
        if (this.status == false) { // задаём новый параметр если статус false
            this.time = Date.now() + (this.getRandomInt(241, 1) * 5.33333333333333); // ставим время окончания задачи
            this.status = "run"; // выставляем статус run
            if (this.dop > 0) {
                this.time += this.dop * 40
            }
        }

        if (this.time - Date.now() > 80) {
            this.time_start += 80;
            this.long += 500; // за каждый проход прибаляем по 500 метров в long

        } else if (this.time - Date.now() > 0) {
            
            this.time_start += this.time - Date.now();
            this.long += (this.time - Date.now()) * 6.25;
        }


        if (Date.now() > this.time || this.long >= 40000) { // когда приходит время закончить бегать - заканчиваем
            this.status = false;
            this.menu = `Черепаха закончила бегать! Она на расстоянии ${this.long}. Черепашка сделала это за ${this.time_start / 320} часа и пробежала ${this.time_start / 320 * 2000}`;
            this.energy = 0;
            this.all_time += this.time_start / 320;
            this.time_start = 0;
        }

    }

    sleep() {
        if (this.status == false) { // задаём новый параметр если статус false
            this.time = Date.now() + (this.getRandomInt(301, 180) * 5.33333333333333); // количество млс
            this.status = "sleep";
        }
        if (this.time - Date.now() > 80) {
            this.time_start += 80;

        } else if (this.time - Date.now() > 0) {
            
            this.time_start += this.time - Date.now();
        }


        
        if (Date.now() > this.time) {
            this.status = false;
            this.menu = `Черепаха закончила спать! ${this.time_start / 320} час. она спала!`;
            this.energy = 1;
            this.all_time += this.time_start / 320;
            if (this.time_start / 320 > 4) {
                this.dop = Math.floor((this.time_start / 320 - 4) / 0.250);
            }
            this.time_start = 0;

        }    
    }

    get() {
        return this.status;
    }
}








// run
 // if (this.active == 0) {

        //     this.active = time;
        // }
        
        
        // if (this.active > 0) {
        //     this.time += 15
        //     if (this.active > 15) {
        //         this.long += 15 * 33.3334;
        //         this.active -= 15;

        //         // `Черепаха пробежала ${15 * 33.3334}! Сейчас она на ${this.long}`;
        //     } else {

        //         this.long += this.active * 33.3334;
        //         this.active = 0;
        //         this.energy = false;
        //         this.status = false;
        //         this.menu = `Черепаха пробежала ${time * 33.3334} метров! Сейчас она на ${this.long} и уже засыпает! Потраченное время - ${this.time / 60} часа`;
        //         this.time = 0;
        //     }
        // }



// sleep 

 // this.status = "sleep";
        // this.energy = true;
        // time - 240 > 14 ? this.active += Math.floor((time - 240) / 15) * 250 : this.active += 0, time * 5.333333333333333;
        // this.status = false;

        // this.menu = `Черепаха поспала ${time / 60} часа! Она приступает к бегу!`;





















            // if (this.active > 0) {
            //     if (this.active > 15) {
            //         this.long += 15 * 33.3334 + (this.plus * 250);
            //         this.active -= 15;
            //         this.now_distance += 15 * 33.3334 + (this.active);
            //         return `Черепаха пробежала ${15 * 33.3334 + (this.active)}! Сейчас она на ${this.long}`;

            //         this.long += this.active * 33.3334 + (this.plus * 250);
            //         this.active = 0;
            //         this.energy = false;
            //         this.status = false;
            //         this.now_distance += this.active * 33.3334 + (this.active)
            //         return `Черепаха пробежала ${this.active * 33.3334 + (this.active)}! Сейчас она на ${this.long} и уже засыпает!`;
            //     }
            // } 
            
            
            
            
            
            
            
            
            
            
            // this.status = "run";
            

            // this.long += this.active * 33.3334 

            // this.status = false;
            // this.energy = false;
            // return `Черепха пробежала ${this.active * 33.3334} за ${time}`