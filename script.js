
function etchasketch()
{
    const container = document.getElementById("container")
    const table = document.createElement("table")

    const sizebtn = document.getElementById("sizebtn");



    let size = 16;
    
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
    
        document.querySelectorAll('#grid td')
        .forEach(e => e.addEventListener("click", function(event) {

            let td = event.target;

            td.style.backgroundColor = "black";

            console.log(td)
        }));
}

etchasketch();