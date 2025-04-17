import Turtle from "./turtle.js";

let t = new Turtle("Egor");
// 80 млс = 15 мин
// черепаха рассказывает сменился ли у неё стаус
setTimeout(function Turtle() {
  switch (t.get()) {
    case false:
      console.log(t.menu);
      
      if (t.long < 40000) {
        if (t.energy) { // можем ли мы ещё бегать?
          t.run();
        } else {
          t.sleep()
        }
      } else {
        alert(`Черепаха ${t.name} пробежала марафон за ${t.all_time} часов`); // / 80 * 15 / 60
      }
      break;
    case "run":
      if (t.long < 40000) {
        t.run()
      }
      break;
    case "sleep":
      if (t.long < 40000) {
        t.sleep()
      }
      break;
    default:
      console.log("123");
      break;
  }
  setTimeout(Turtle, 80);
}, 80);





































//   if (t.energy) {
//       let time1 = getRandomInt(241, 1);
//     console.log(t.run(time1));
//   } else {
//     let time2 = getRandomInt(301, 180);
//     console.log(t.sleep(time2));
//   }
//   if (t.long > 40000) {
//     alert("END");
//   }
// 80  млс == 15 мин

// case "run":
//   if (t.energy) {
//     t.run(getRandomInt(241, 1));
//     console.log(t.menu);
//   }
//   break;
// case "sleep":
//   console.log(t.sleep(getRandomInt(301, 180)));
//   break;
// default:
//   if (t.long > 40000) {

//     alert(`END ${t.long}`);
//   } else {
//     if (t.energy) {
//         t.run(getRandomInt(241, 1));
//         if (!t.energy) {
//           console.log(t.menu);
//         }
//     } else {
//         t.sleep(getRandomInt(301, 180));
//         console.log(t.menu);
//     }
//   }
//   break;