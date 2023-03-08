let mpf = 3125
let str = 1

const atolls = new Array(1, 1, 1, 1, 1, 1, 1, 1)
let sug = true
let total = 0
let one = 1
let cost = 20
let def = 100
let dg = 100
let tb = 0
let eg = 0
let ns = 0
let pr = 0
let ea = 0
let sa = 0
let da = 0
function fly() {
  total += one
  document.getElementById("mab").innerHTML = total
  def -= 1



}


function show() {
  document.getElementById("no").innerHTML = ("Defences at " + def + "%")
}


function send() {
  let loc = prompt("Which atoll will you send troops to \n 1 - Diego Garcia \n 2 - Three Brothers \n 3 - Egmont Islands \n 4 - Nelson Islands \n 5 - Peros Banhos \n 6 - Eagle Islands \n 7 - Salomon Islands \n 8 - Danger Islands")
  if (atolls[loc - 1] == 1) {
    if (total >= 10) {
      document.getElementById("no").innerHTML = "You send 10 of your troops"
      if (loc == 1) {
        dg += 10
      }
      else if (loc == 2) {
        tb += 10
      }
      else if (loc == 3) {
        eg += 10
      }
      else if (loc == 4) {
        ns += 10
      }
      else if (loc == 5) {
        pr += 10
      }
      else if (loc == 6) {
        ea += 10
      }
      else if (loc == 7) {
        sa += 10
      }
      else {
        da += 10
        if ((Math.floor(Math.random() * 2)) == 1) {
          da -= 5
          window.alert("Your transport ship crashed and only half of the sent troops arrived safely to the atoll")
        }
      }
      total -= 10
      document.getElementById("mab").innerHTML = total
    }
    else {
      document.getElementById("no").innerHTML = "You need more troops"

    }
  }
  else {
    document.getElementById("no").innerHTML = "You can't post troops on enemy occupied areas"
  }
}

function retur() {
  total += dg + tb + eg + ns + ea + pr + ea + da + sa
  dg = 0
  tb = 0
  eg = 0
  ns = 0
  ea = 0
  pr = 0
  da = 0
  sa = 0
  document.getElementById("mab").innerHTML = total
}

function upgrade() {
  if (dg > 0 && tb > 0 && eg > 0 && ea > 0 && da > 0 && pr > 0 && ns > 0 && sa > 0) {
    window.alert("You improve your island defences to 100%")
    def = 100
  }
  else {
    window.alert("You need troops posted on all 8 atolls before you can fully improve their defences. Minor boost in defence provided.")
    def += 2
    if (def > 100) {
      def = 100
    }
  }
}

function prop() {

  if (total >= cost) {
    one *= 2
    total -= cost
    cost *= 2
    document.getElementById("mab").innerHTML = total
    window.alert("You release new propaganda, attracting more soldiers. (You can recruit " + one + " x as many soldiers). However, some of your former soldiers walk out, disgusted by your abuse of power")
  }
  else {
    window.alert("Not enough soldiers. If you release this propaganda, you will lose the support of all of your army")
  }
}

function choose(z, y) {


  let choice = prompt("Do you \n 1 - concede defeat \n 2 - launch an air raid on the island (10 soldiers required)")
  if (choice == 1 || choice == "") {
    atolls[y] = 0
    str += 1
  }
  else {
    if (dg >= 10) {
      for (let i = 0; i < 10; i++) {
        let j = Math.floor(Math.random() * 6)
        if (j == 1 || j == 3 || j == 5) {
          z -= Math.floor(Math.random() * 30)

        }
        j = Math.floor(Math.random() * 7)
        if (j == 2 || j == 3 || j == 5) {
          dg -= 1
          document.getElementById("mab").innerHTML = total
        }
      }
      if (z <= 0) {
        window.alert("Air strike successful, all enemy forces eliminated")
      }
      else {
        window.alert("The airstrike was a failure. The Mauritians claim the atoll")
        atolls[y] = 0
        str += 1
      }
    }
    else {
      window.alert("You don't have any troops at Diego Garcia to send")
      atolls[y] = 0
      str += 1
    }


  }
}

function winState() {
  if (mpf < 1) {
    window.alert("The Mauritians have run out of skilled personnel within their police force. They cannot continue fighting, lest they neglect dealing with crime at home. They agree to an armistice. ")
    throw new Error()
  }
  if (!atolls.includes(1)) {
    window.alert("In spite of your best attempts, the Mauritians claim the British Indian Ocean Teritory. Your forces abandon the atolls post haste.")
    throw new Error()
  }
}

function scrdate() {
  document.getElementById("one").innerHTML = dg
  document.getElementById("two").innerHTML = tb
  document.getElementById("thr").innerHTML = eg
  document.getElementById("fou").innerHTML = ns
  document.getElementById("fiv").innerHTML = pr
  document.getElementById("six").innerHTML = ea
  document.getElementById("sev").innerHTML = sa
  document.getElementById("eig").innerHTML = da
  document.getElementById("defe").innerHTML = "Defences at " + def + "%."
}
window.setInterval(scrdate, 1000)
window.setInterval(winState, 10000)
window.setInterval(attack, 20000)




function attack() {

  if (atolls.includes(1) && mpf > 0) {
    window.alert("The Mauritians are attacking one of your territories")
    let atloc = Math.floor(Math.random() * 8);
    while (atolls[atloc] == 0) {
      atloc = Math.floor(Math.random() * 8);

    }
    let x = Math.floor(Math.random() * 100) + 80;
    mpf -= x
    while (x > 0) {
      if (atloc == 0) {
        let c = Math.floor(Math.random() * 3)
        if (c == 1) {
          dg -= str * Math.floor(Math.random() * 10)
        }
        else if (c == 2) {
          x -= def
        }
        else {

        }
        if (dg < 0) {
          window.alert("Your troops in Diego Garcia have been eliminated")
          choose(x, 0)
          break
        }

      }

      else if (atloc == 1) {
        let c = Math.floor(Math.random() * 3)
        if (c == 1) {
          tb -= str * Math.floor(Math.random() * 10)
        }
        else if (c == 2) {
          x -= def
        }
        else {

        }
        if (tb < 0) {
          window.alert("Your troops on Three Brothers have been eliminated")
          choose(x, 1)
          break
        }

      }

      else if (atloc == 2) {
        let c = Math.floor(Math.random() * 3)
        if (c == 1) {
          eg -= str * Math.floor(Math.random() * 10)
        }
        else if (c == 2) {
          x -= def
        }
        else {

        }
        if (eg < 0) {
          window.alert("Your troops at the Egmont Islands have been eliminated")
          choose(x, 2)
          break
        }

      }
      else if (atloc == 3) {
        let c = Math.floor(Math.random() * 3)
        if (c == 1) {
          ns -= str * Math.floor(Math.random() * 10)
        }
        else if (c == 2) {
          x -= def
        }
        else {

        }
        if (ns < 0) {
          window.alert("Your troops on the Nelson Islands have been eliminated")
          choose(x, 3)
          break
        }

      }
      else if (atloc == 4) {
        let c = Math.floor(Math.random() * 3)
        if (c == 1) {
          pr -= str * Math.floor(Math.random() * 10)
        }
        else if (c == 2) {
          x -= def
        }
        else {

        }
        if (pr < 0) {
          window.alert("Your troops on Peros Banhos have been eliminated")
          choose(x, 4)
          break
        }

      }
      else if (atloc == 5) {
        let c = Math.floor(Math.random() * 3)
        if (c == 1) {
          ea -= str * Math.floor(Math.random() * 10)
        }
        else if (c == 2) {
          x -= def
        }
        else {
          def += 1
          if (def > 100) {
            def = 100
          }

        }
        if (ea < 0) {
          window.alert("Your troops on Eagle Islands have been eliminated")
          choose(x, 5)
          break
        }

      }
      else if (atloc == 6) {
        let c = Math.floor(Math.random() * 6)
        if (c == 1) {
          sa -= str * Math.floor(Math.random() * 10)
        }
        else if (c == 2) {
          x -= def
        }
        else {

        }
        if (sa < 0) {
          window.alert("Your troops on Salomon Islands have been eliminated")
          choose(x, 6)
          break
        }

      }
      else {
        let c = Math.floor(Math.random() * 3)
        if (c == 1) {
          da -= str * Math.floor(Math.random() * 10)
        }
        else if (c == 2) {
          x -= def
        }
        else {
          x -= 30
        }
        if (da < 0) {
          window.alert("Your troops on Danger Islands have been eliminated")
          choose(x, 7)
          break
        }

      }
    }
  }

}

