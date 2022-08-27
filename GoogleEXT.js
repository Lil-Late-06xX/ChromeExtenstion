

// chrome://extensions/


let myLeads = []


const input = document.getElementById("type")
const btn = document.getElementById("save")
const btn2 = document.getElementById("delete")
const btn3 = document.getElementById("tab")
const ulist = document.getElementById("ull")
const leadsFromLocal = JSON.parse(localStorage.getItem("lol")) 


            if (leadsFromLocal){

                myLeads = leadsFromLocal
        
                Save(myLeads)
                
        
        
           }
 

   


           btn.addEventListener("click", function() {

            myLeads.push(input.value)  
            
            input.value = ""

            localStorage.setItem("lol" , JSON.stringify(myLeads))


            Save(myLeads)
            
        })







        btn2.addEventListener("dblclick" , function(){


                localStorage.clear()

                myLeads = []

                Save (myLeads) 


        })






            btn3.addEventListener("click" , function(){




               chrome.tabs.query({ active : true , currentWindow : true } , function(tabs){

                        myLeads.push( tabs[0].url )

                        localStorage.setItem("lol" , JSON.stringify(myLeads))

                        Save(myLeads)

               } ) 
   
            }
            )

        



         
        
        function Save (leads){

            let listItem =  ""
            for ( let i = 0 ; i < leads.length ; i++ ) {
    
                listItem += `<li> 


                                <a target = '_blank' href=" ${leads[i]} " > ${leads[i]} </a>
                
                
                            </li>`
             }

            ulist.innerHTML = listItem

        }
       



    


























                                        // const newelemnt = document.createElement("li")

                                        // newelemnt.textContent = myLeads[i]

                                        // list.append(newelemnt)