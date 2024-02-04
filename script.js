
function etchasketch()
{
    const container = document.getElementById("container")
    const table = document.createElement("table")

    const sizebtn = document.getElementById("sizebtn");

    grid(8);

    function grid(size){
        for(let i=0; i<size; i++)
        {
            const row = document.createElement("tr");
    
            for(let j=1; j<=size; j++ )
            {
                const cell = document.createElement("td");          

                
            row.appendChild(cell);
    
            console.log(cell);
            }
     
            table.appendChild(row);
    
            console.log(row);
        
        }
    
        table.setAttribute('id','grid');
    
        container.appendChild(table);
    }

    sizebtn.addEventListener("click", function()
    {
        grid(prompt("set grid size"))
    })
        
    

        
        
    
    
        document.querySelectorAll('#grid td')
        .forEach(e => e.addEventListener("mouseover", function(event) {

            let td = event.target;

            td.style.backgroundColor = "black";
        }));

        const clear = document.getElementById("clear");

        clear.addEventListener("click", function(){

            document.querySelectorAll('#grid td').forEach.style.backgroundColor = "white";
        })
}

etchasketch();