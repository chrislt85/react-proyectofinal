import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
            console.log(`Mostrando Item ${id}`);

            // ACA SIMULO EL LLAMADO PARA CARGAR EL ITEM CORRESPONDIENTE
            const task = new Promise((resolve, reject) => {
                setTimeout(()=>{
                    const mockItems = [
                        {id:1, category:'lamparas', title:"Velador de escritorio", description: "Velador Pinza Estilo 'Pixar' Flexible con Clip. Ideal para el escritorio, mesa de luz y demás", price:3800.00, pictureUrl:"https://arcencohogar.vtexassets.com/arquivos/ids/284267-800-800?v=637651645816900000&width=800&height=800&aspect=true" },
                        {id:2, category:'lamparas', title:"Lámpara de lava", description: "Material Aluminio. Incluye dimmer para regular la intensidad. Funcionan con lámparas comunes de 25w.", price:13350.00, pictureUrl:"https://i.linio.com/p/2ab0096df8e7a5285d723be899abc2f0-product.jpg" },
                        {id:3, category:'lamparas', title:"Lámpara de escritorio flexible", description: "Lámparas de escritorio de línea clásica, doble brazo realizado en caño de hierro y chapa. Con movimientos de resorte.", price:9400.00, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_845471-MLA47065476548_082021-O.webp" },
                        {id:4, category:'apliques', title:"Aplique Plafon 1 Luz Techo Vintage", description: "Apto Led E27 Moderno Fz. Ambientes: Interior - Marca: Luz Desing - Condición del ítem: Nuevo - Capacidad de focos: 1 - Tipos de fuentes de luz: LED - Materiales: Hierro - Modelo: Aplique Vintage 9009/A - Lugares de montaje: Techo - Potencia: 50 W - Alimentación: 220v - Voltaje: 220V", price:8280.00, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_662804-MLA47352962207_092021-B.jpg" },
                        {id:5, category:'apliques', title:"Bidireccional Exterior Aluminio Con 2 Led Gu10 Sf", description: "Ambientes: Exterior - Marca: Luz Desing - Incluye focos: Sí - Condición del ítem: Nuevo - Capacidad de focos: 2 - Tipo de rosca del foco: GU10 - Tipos de fuentes de luz: LED - Materiales: Aluminio - Modelo: BIDIRECCIONAL NEGRO - Lugares de montaje: Pared - Potencia: 14 W - Alimentación: 220V - Voltaje: 220V", price:10036.00, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_657571-MLA32247437597_092019-B.jpg" },
                        {id:6, category:'apliques', title:"Unidireccional Acero Inoxidable Gu10 Apto Led Exterior Tbcin", description: "Ambientes: Exterior - Marca: TBCin - Condición del ítem: Nuevo - Formato de la lámpara: UNIDIRECCIONAL - Capacidad de focos: 1 - Tipos de fuentes de luz: LED - Materiales: Acero - Modelo: LUM6-A UNIDIRECCIONAL ACERO INOXIDABLE TBCIN - Lugares de montaje: Pared - Potencia: 50 W - Alimentación: 220v - Voltaje: 220V - Con Wi-Fi: No", price:9819.00, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_942296-MLA51438776375_092022-B.jpg" },
                        {id:7, category:'apliques', title:"Aplique 1 Luz Globo Exterior Raye Apto Led E27 Deco Moderno", description: "Ambientes: Exterior - Marca: Luz Desing - Condición del ítem: Nuevo - Capacidad de focos: 1 - Tipos de fuentes de luz: LED - Materiales: Acrílico - Modelo: Aplique Globo - Lugares de montaje: Pared - Potencia: 60 W - Alimentación: 220V - Voltaje: 220V", price:5689.00, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_739604-MLA47755282673_102021-B.jpg" },
                        {id:8, category:'colgantes', title:"Colgante metálico", description: "Colgante metálico de una luz para lámpara E27 LED", price:7494.00, pictureUrl:"https://iluminacion.com.ar/Image/0/600_750-4089-c.jpg" },
                        {id:9, category:'colgantes', title:"Colgante cono", description: "Colgante cono de cuatro luces con listón para lámpara E27 LED", price:14214.00, pictureUrl:"https://iluminacion.com.ar/image/0/1000_1300-79-4.jpg" },
                        {id:10, category:'colgantes', title:"Colgante orbital", description: "Colgante de cuatro luces para lámparas E27 LED", price:33052.00, pictureUrl:"https://iluminacion.com.ar/image/0/1000_1300-cival_3025_colgante1.jpg" },
                        {id:11, category:'colgantes', title:"Colgante luna LED", description: "Colgante luna con led integrado. Disponible en tres medidas.", price:184412.00, pictureUrl:"https://iluminacion.com.ar/image/0/1000_1300-mag_luna_1.jpg" },
                        {id:12, category:'colgantes', title:"Colgante Imperio", description: "Colgante de cristal y niquel brillante de doce luces para lámparas E14", price:344850.00, pictureUrl:"https://iluminacion.com.ar/image/0/1000_1300-nik_imperio_1.jpg" },
                        {id:13, category:'colgantes', title:"Araña Cristal Smoke", description: "Araña de cristal de cinco luces para lámpara E14 LED", price:564005.00, pictureUrl:"https://iluminacion.com.ar/image/0/1000_1300-vig_smoke-5-luces_1.jpg" },
                        {id:14, category:'cartelesled', title:"Cartel LED flamingo rosa", description: "Cartel led flamingo rosa grande, pensado para adaptarse y lucir en cualquier lugar que te imagines. Requiere 2 pilas AAA (incluidas).", price:4409.00, pictureUrl:"https://cinderelladecoracion.com/wp-content/uploads/2020/04/Cartel-led-flamingo-rosa-grande.jpg" },
                        {id:15, category:'cartelesled', title:"Cartel LED marco corazon rojo", description: "Cartel led marco corazon rojo grande, pensado para adaptarse y lucir en cualquier lugar que te imagines. Requiere 2 pilas AAA (incluidas).", price:3619.00, pictureUrl:"https://cinderelladecoracion.com/wp-content/uploads/2020/04/Cartel-led-marco-corazon-rojo-grande.jpg" },
                        {id:16, category:'cartelesled', title:"Cartel LED cactus oxido", description: "Cartel led cactus oxido mediano. se adaptan a cualquier estilo y otorgan un brillo delicado a tu espacio. Podés colocarlos en una mesa, escritorio o pared. Requiere 2 pilas AAA (incluidas).", price:3709.00, pictureUrl:"https://cinderelladecoracion.com/wp-content/uploads/2020/04/Cartel-led-cactus-oxido-mediano-1.jpg" },
                        {id:17, category:'cartelesled', title:"Cartel LED flor 1 rosa", description: "Cartel led flor 1 rosa mediana, se adaptan a cualquier estilo y otorgan un brillo delicado a tu espacio. Podés colocarlas en una mesa, escritorio o pared.", price:3039.00, pictureUrl:"https://cinderelladecoracion.com/wp-content/uploads/2020/04/Cartel-led-flor-1-rosa-mediana.jpg" }
                      ];
                    // simulo obtener solo el producto buscado
                    resolve(mockItems.filter(item => item.id == id)
                                     .map((item) => ({ id: item.id, title: item.title, description: item.description, price: item.price, pictureUrl: item.pictureUrl })));
                }, 2000);
            })
           
            task.then((result)=>{
                console.log("Item", result);
                if (result.length > 0)
                    setProducto(result[0]);
            }).catch((err)=>{
                console.log(err);
            }).finally(()=>{});

    }, [id]);

    return(
        <>
            <div className="App">
                <section className="App-detail">
                    <ItemDetail item={producto} />
                </section>
            </div>
        </>
    )
}

export default ItemDetailContainer