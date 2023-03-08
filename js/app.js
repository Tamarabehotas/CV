/* modo claro - modo oscuro */
let i = document.getElementById("i");
i.addEventListener ("click", function(){
    if (i.className.includes("bi-brightness-high")){
        i.className= "bi bi-moon";
        i.title="Modo oscuro activo";
        document.documentElement.style.setProperty('--color-1', 'rgb(8, 35, 121)');
        document.documentElement.style.setProperty('--color-2', '#00405a');
        document.documentElement.style.setProperty('--color-3', 'lightgrey');
        document.documentElement.style.setProperty('--color-4', '#00125a');
        document.documentElement.style.setProperty('--color-pagina', 'rgb(7, 2, 62)');
        document.documentElement.style.setProperty('--color-texto', 'rgb(230, 230, 243)');
    } else {
        i.className="bi bi-brightness-high";
        i.title="Modo claro activo";
        document.documentElement.style.setProperty('--color-1', '#82cbff');
        document.documentElement.style.setProperty('--color-2', '#3ec8ff');
        document.documentElement.style.setProperty('--color-3', '#c78b19');
        document.documentElement.style.setProperty('--color-4', '#a0d4ff');
        document.documentElement.style.setProperty('--color-pagina', 'aliceblue');
        document.documentElement.style.setProperty('--color-texto', 'black');
    }
})

/* convertir a pdf */
document.addEventListener("DOMContentLoaded", () => {
    const $boton = document.querySelector("#pdf");
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = document.body;
        alert("Su archivo se esta descargando en PDF, aguarde por favor.")
        html2pdf()
            .set({
                margin: 0.2,
                filename: 'CV-Behotas-Tamara.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3, 
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a3",
                    orientation: 'portrait' 
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
        });
});




