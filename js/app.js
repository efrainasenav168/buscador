document.addEventListener("DOMContentLoaded" ,()=>{
    /* variables */
    const resultado=document.querySelector("#resultado")
    const marca=document.querySelector("#marca")
    const year=document.querySelector("#year");
    const precioMinimo=document.querySelector("#minimo");
    const precioMaximo=document.querySelector("#maximo");
    const puertas=document.querySelector("#puertas");
    const transmision=document.querySelector("#transmision");
    const color=document.querySelector("#color");
    const maxDate=new Date().getFullYear()
    const minDate=maxDate-10;
    console.log(maxDate-minDate)
    const datosAuto={
        marca:'',
        year:'',
        precioMinimo:'',
        precioMaximo:'',
        puertas:'',
        transmision:'',
        color:''
    }
    /* eventos */
    mostrarAutos();
    llamarSelect();
    marca.addEventListener("change", e=>{
        console.log(e.target.value);
    })

    /* fuciones */
    function mostrarAutos(){
            autos.forEach(auto => {
                const{marca, modelo, year,puertas, transmision,precio,color}=auto
                const autoHtml=document.createElement("P");
                autoHtml.textContent=`
                    ${marca} ${modelo}- ${year} - ${puertas} puertas-  trasnmision ${transmision} - precio ${precio}- color ${color}

                `   
                resultado.appendChild(autoHtml)     
            });
                 
        }
    function llamarSelect(){
        for(let i=maxDate; i>=minDate;i--){
            const option=document.createElement("OPTION");
            option.value=i;
            option.textContent=i;
            year.appendChild(option)
        }
    }    

})