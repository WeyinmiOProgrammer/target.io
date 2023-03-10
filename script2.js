let mpf = 3125
    let str = 1
    
    const atolls = new Array(1,1,1,1,1,1,1,1)
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
      //document.getElementById("mab").innerHTML = total
      def -= 1
      
      
     
      }
    

    function show()
    {
      //document.getElementById("no").innerHTML = ("Defences at " + def +"%")
    }
    
    
    function send() {
      let loc = Math.floor(Math.random() * 8)+ 1
      if (atolls[loc-1] == 1)
      {
      if (total >= 10)
      {
      
        if (loc == 1)
        {
          dg += 10
        }
        else if (loc == 2)
        {
          tb += 10
        }
        else if (loc == 3)
        {
          eg += 10
        }
        else if (loc == 4)
        {
          ns += 10
        }
        else if (loc == 5)
        {
          pr += 10
        }
        else if (loc == 6)
        {
          ea += 10
        }
        else if (loc == 7)
        {
          sa += 10
        }
        else
        {
          da += 10
          if ((Math.floor(Math.random() * 2)) == 1)
          {
            da-= 5
            
          }
        }
      total -= 10
      //document.getElementById("mab").innerHTML = total
      }
      
        }
      else
      {
        //document.getElementById("no").innerHTML = "You can't post troops on enemy occupied areas"
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

    function upgrade()
        {
          if (dg > 0 && tb > 0 && eg > 0  && ea > 0 && da > 0 && pr > 0 && ns > 0 && sa > 0)
        {
          //window.alert("You improve your island defences to 100%")
          def = 100
        }
          else
    {
      //window.alert("You need troops posted on all 8 atolls before you can fully improve their defences. Minor boost in defence provided.")
      def += 2
      if (def > 100)
      {
        def = 100
      }
    }
        }
    
    function prop() {
      
      if (total >= cost)
      {
        one *= 2
        total -= cost
        cost *= 2
        //document.getElementById("mab").innerHTML = total
        
      }
      
    }

    function choose(z, y)
      {
        
        
        let choice = Math.floor(Math.random() * 3)+1
        if (choice == 1 || choice == "")
        {
          atolls[y] = 0
          str += 1
        }
        else
        {
          if (dg >= 10)
          {
            for (let i = 0; i < 10; i++)
              {
                let j = Math.floor(Math.random() * 6)
                if (j == 1 || j == 3 || j == 5)
                {
                  z -= Math.floor(Math.random() * 30)
                  
                }
                j = Math.floor(Math.random() * 7)
                if (j == 2 || j == 3 || j == 5)
                {
                  dg -= 1
                  document.getElementById("mab").innerHTML = total
                }
              }
            if (z <= 0)
            {
              window.alert("Air strike successful, all enemy forces eliminated")
            }
            else
            {
              window.alert("The airstrike was a failure. The Mauritians claim the atoll")
              atolls[y] = 0
              str += 1
            }
          }
          else
        {
          window.alert("You don't have any troops at Diego Garcia to send")
          atolls[y] = 0
          str += 1
        }
          
          
        }
      }

    function winState()
      {
        if (mpf < 1)
        {
          window.alert("You have run out of skilled personnel within your police force. You cannot continue fighting, lest you neglect dealing with crime at home. You agree to an armistice. ")
         throw new Error()
        }
        if (!atolls.includes(1))
        {
          window.alert("In spite of Britain's best attempts, you claim the British Indian Ocean Teritory.")
         throw new Error()
        }
      }
function flag(x)
  {
    if (atolls[x] == 1)
    {return("🇮🇴")}
    else
    {return("🇲🇺")}
  }
    function scrdate()
      {
        document.getElementById("one").innerHTML = flag(0)
        document.getElementById("two").innerHTML = flag(1)
        document.getElementById("thr").innerHTML = flag(2)
        document.getElementById("fou").innerHTML = flag(3)
        document.getElementById("fiv").innerHTML = flag(4)
        document.getElementById("six").innerHTML = flag(5)
        document.getElementById("sev").innerHTML = flag(6)
        document.getElementById("eig").innerHTML = flag(7)
        document.getElementById("defe").innerHTML = "Predicted defences at "+def+"%."
        document.getElementById("mab").innerHTML = mpf
      }


function defend()
  {
    if (def <= 50)
    {
      
      for (let i = 0; i< 10; i++)
        {
          setTimeout(upgrade,100)
        }
    }
    else
    {
    const action = Math.floor(Math.random()*8)
    if (action == 1 || action == 7)
    {
      for (let i =0; i< 10; i++)
        {
          setTimeout(fly,100)
        }
    }
    else if (action >= 2 && action < 6)
    {
      for (let i = 0; i < 3; i++)
      {
        setTimeout(send,800)
      }
    }
    else if (action == 0)
    {
      if (total < cost)
      {
        for (let i = 0; i < cost/ one ; i++)
          {
            setTimeout(fly,100)
          }
      }
      prop()
    }
    }
  }
window.setInterval(scrdate, 1000)    
window.setInterval(winState, 10000)
window.setInterval(attack,20000)
window.setInterval(defend,1500)
    

    

    function attack()
        {
          
          if (atolls.includes(1) && mpf > 0)
          {
          
          let atloc = window.prompt("Choose which atoll you are going to attack");
            atloc -= 1
          while (atolls[atloc] == 0)
            {
              let atloc = window.prompt("Choose which atoll you are going to attack");
              atloc -= 1
              
            }
          let x = window.prompt("Enter how many troops you will send (max: 180, min: 80)")
          if (x > 180)
          {
            x= 180
          }
            if (x < 80)
            {
              x = 80
            }
          mpf -= x
          while (x > 0)
                     {
                       if (atloc == 0)
            {
              let c = Math.floor(Math.random() * 3)
              if (c == 1)
              {
                dg -= str * Math.floor(Math.random() * 10)
              }
              else if (c == 2)
                  {
                    x -=  def
                  }
              else
              {
                
              }
              if (dg < 0)
              {
                window.alert("Troops in Diego Garcia have been eliminated")
                choose(x,0)
                break
              }
              
            }

            else if (atloc == 1)
            {
              let c = Math.floor(Math.random() * 3)
              if (c == 1)
              {
                tb -= str * Math.floor(Math.random() * 10)
              }
              else if (c == 2)
                  {
                    x -=  def
                  }
              else
              {
                
              }
              if (tb < 0)
              {
                window.alert("Troops on Three Brothers have been eliminated")
                choose(x,1)
                break
              }
              
            }

            else if (atloc == 2)
            {
              let c = Math.floor(Math.random() * 3)
              if (c == 1)
              {
                eg -= str * Math.floor(Math.random() * 10)
              }
              else if (c == 2)
                  {
                    x -= def
                  }
              else
              {
                
              }
              if (eg < 0)
              {
                window.alert("Troops at the Egmont Islands have been eliminated")
                choose(x,2)
                break
              }
              
            }
            else if (atloc == 3)
            {
              let c = Math.floor(Math.random() * 3)
              if (c == 1)
              {
                ns -= str * Math.floor(Math.random() * 10)
              }
              else if (c == 2)
                  {
                    x -=  def
                  }
              else
              {
                
              }
              if (ns < 0)
              {
                window.alert("Troops on the Nelson Islands have been eliminated")
                choose(x,3)
                break
              }
              
            }
            else if (atloc == 4)
            {
              let c = Math.floor(Math.random() * 3)
              if (c == 1)
              {
                pr -= str * Math.floor(Math.random() * 10)
              }
              else if (c == 2)
                  {
                    x -=  def
                  }
              else
              {
                
              }
              if (pr < 0)
              {
                window.alert("Your troops on Peros Banhos have been eliminated")
                choose(x,4)
                break
              }
              
            }
            else if (atloc == 5)
            {
              let c = Math.floor(Math.random() * 3)
              if (c == 1)
              {
                ea -= str * Math.floor(Math.random() * 10)
              }
              else if (c == 2)
                  {
                    x -=  def
                  }
              else
              {
                def += 1
                if (def > 100)
            {
              def = 100
            }
                
              }
              if (ea < 0)
              {
                window.alert("Troops on Eagle Islands have been eliminated")
                choose(x,5)
                break
              }
              
            }
            else if (atloc == 6)
            {
              let c = Math.floor(Math.random() * 6)
              if (c == 1)
              {
                sa -= str * Math.floor(Math.random() * 10)
              }
              else if (c == 2)
                  {
                    x -=  def
                  }
              else
              {
                
              }
              if (sa < 0)
              {
                window.alert("Troops on Salomon Islands have been eliminated")
                choose(x,6)
                break
              }
              
            }
            else 
            {
              let c = Math.floor(Math.random() * 3)
              if (c == 1)
              {
                da -= str * Math.floor(Math.random() * 10)
              }
              else if (c == 2)
                  {
                    x -=  def
                  }
              else
              {
                x -= 30
              }
              if (da < 0)
              {
                window.alert("Troops on Danger Islands have been eliminated")
                choose(x,7)
                break
              }
              
            }
                     }
          }
          
        }