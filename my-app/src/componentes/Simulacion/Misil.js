import "./Misil.css";

const min = 0;
const tamaño = 5;
const maxBorde = 1021-tamaño;

//The Robot size of 21x21px.
function Misil({xmis, ymis, xmisf, ymisf, num, ronda}) {
    
    let show = false;
    if (xmis !== null || ymis !== null || xmisf !== null || ymisf !== null) {
        show = true;
    } else {
        show = false;
    }

    // Check Bordes
    if (xmis < min) { xmis = min;}
    if (ymis < min) { ymis = min;}
    if (xmis > maxBorde) { xmis = maxBorde;}
    if (ymis > maxBorde) { ymis = maxBorde;}
    if (xmisf < min) { xmisf = min;}
    if (ymisf < min) { ymisf = min;}
    if (xmisf > maxBorde) { xmisf = maxBorde;}
    if (ymisf > maxBorde) { ymisf = maxBorde;}

    //Misil: Aplicar Coordenadas.
    document.documentElement.style.setProperty("--xinitmis_" + num, xmis + "px");
    document.documentElement.style.setProperty("--yinitmis_" + num, (maxBorde-ymis) + "px");
    document.documentElement.style.setProperty("--xfinalmis_" + num, xmisf + "px");
    document.documentElement.style.setProperty("--yfinalmis_" + num, (maxBorde-ymisf) + "px");

    const misilanimar = { animation: `animatemis_${num} 1s linear forwards`}

    return (
        <div>
            {show && <div id={"Misil"} style={misilanimar} key={ronda*(num+1)}></div>}
        </div>
    );
}

export default Misil;