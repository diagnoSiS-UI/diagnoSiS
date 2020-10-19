import React from 'react'

import fundo from '../images/Vector 1.png'
import titulo from '../images/titulo.png'
import logo from '../images/logo.png'
import governo from '../images/governo.png'
import icones from '../images/icones.png'
import fapesq from '../images/fapesq.png'

function Home() {
    return(
        <React.Fragment>
            <div>
                <img className="fundo" src={fundo}/>
                <div className="row">
                <div style={{marginLeft:"40px", marginTop:"20px", zindex:" 2"}} classNameName="col-md-8 ">
                    <img src={titulo} alt="titulo"  />
                </div>
                </div>
                <br></br>
                <div classNameName="row">
                    <div style={{marginLeft: "40px"}} className="col-md-8">
                        <p style={{fontFamily: "Droid Sans", textAlign:"justify", fontSize: "20px"}}>PROJETO FAPESQ: Plataforma Computacional Open Source Baseada em <br></br>Deep Learning para Auxílio na Detecção/Diagnóstico do COVID-19 a <br></br>partir de Imagens de Exames de Radiografia. <br></br><br></br>Edital Nº 003/2020 - FAPESQ/SEECT </p>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                    <button style={{background:"#747484",color:"#fff",borderRadius:"6px",marginLeft:"80px",marginTop:"40px",alignItems:"center", width:" 100%",fontSize:" 25px"}} className="btn btnHome">Diagnose</button>
                </div>
                <img style={{position:" absolute", right:" 180px", top: "100px"}} src={logo} alt="logo"/>
                </div>
                <footer style={{marginTop:"30px", marginLeft:" 80px"}} id="footer">
                    <br></br>
                    <br></br>
                    <img src={governo} alt="brasao"  />
                    <img src={icones} alt="governo"  />                
                    <img src={fapesq} alt="img"  />
                </footer>   
            </div>
        </React.Fragment>
    )
}

export default Home