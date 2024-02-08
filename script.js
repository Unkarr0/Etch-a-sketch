
function etchasketch()
{
    const container = document.getElementById("container")
    const table = document.createElement("table")

    const sizebtn = document.getElementById("sizebtn");


    // function gridremove(){

    //     if(table)
    //     {
    //         table.parentNode.removeChild(table);
    //     }
    // }

        
        

    function grid(size){

        removetable()

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
    
        table.classList.add('grid');
    
        container.appendChild(table);
    }

    grid(16)
   
        
        document.querySelectorAll('.grid td')
        .forEach(e => e.addEventListener("mouseover", function(event) {

            event.target.classList.add('cell');

           

        }));

    function removetable()
    {

        while(table)
        {
            container.removeChild(table)
        }

    }

    function changetable()
    {   
        

            while(!table)
            {
                container.appendChild(table)
                let gridsize = prompt('Set the grid size');
                grid(gridsize);

            }

            


        }

    sizebtn.addEventListener('click',changetable);

    const clearbtn = document.getElementById('clear');


        clearbtn.addEventListener('click', function(event){

            document.querySelectorAll('.grid td').forEach(e => e.classList.remove('cell'))
        })
}


etchasketch();