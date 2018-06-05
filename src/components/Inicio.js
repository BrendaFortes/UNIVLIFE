import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';
import Footer from './Footer';

export default class Inicio extends React.Component{
  state = {
    AlumnosPiano:[],
    AlumnosGuitarra:[],
    AlumnosNatacion:[15212155],
    AlumnosFutbol:[],
    selectedOption: undefined
  };

//SE MANTIENEN PRESENTES EL CONTENIDO DE LOS ARREGLOS CONSULTADO EL JSON--------------------------------------------------------
  componentDidMount(){
    console.log('component Did Mount');
    try{
      const json1 = localStorage.getItem('AlumnosPiano');
      const AlumnosPiano = JSON.parse(json1);
      if(AlumnosPiano){
      this.setState(()=>({AlumnosPiano}));
      console.log("componentDidMount PIANO");
      }
    }
    catch(e){
        console.log("Error");
    }

    try{
      const json2 = localStorage.getItem('AlumnosGuitarra');
      const AlumnosGuitarra = JSON.parse(json2);
      if(AlumnosGuitarra){
      this.setState(()=>({AlumnosGuitarra}));
      console.log("componentDidMount GUITARRA");
      }
    }
    catch(e){
        console.log("Error");
    }

    try{
      const json3 = localStorage.getItem('AlumnosNatacion');
      const AlumnosNatacion = JSON.parse(json3);
      if(AlumnosNatacion){
      this.setState(()=>({AlumnosNatacion}));
      console.log("componentDidMount NATACION");
      }
    }
    catch(e){
        console.log("Error");
    }

    try{
      const json4 = localStorage.getItem('AlumnosFutbol');
      const AlumnosFutbol = JSON.parse(json4);
      if(AlumnosFutbol){
      this.setState(()=>({AlumnosFutbol}));
      console.log("componentDidMount FUTBOL");
      }
    }
    catch(e){
        console.log("Error");
    }
  }

//SE ACTUALIZA EL CONTENIDO DEL ARREGLO PARA AGREGAR EL NUEVO ELEMENTO--------------------------------------------------------
  componentDidUpdate(prevProps,prevState){
    console.log('componen Did Update');
    if(prevState.AlumnosPiano.length !== this.state.AlumnosPiano.length){
      const json = JSON.stringify(this.state.AlumnosPiano);
      localStorage.setItem('AlumnosPiano',json);
      console.log("Saving data PIANO");
    } else if(prevState.AlumnosGuitarra.length !== this.state.AlumnosGuitarra.length){
      const json = JSON.stringify(this.state.AlumnosGuitarra);
      localStorage.setItem('AlumnosGuitarra',json);
      console.log("Saving data GUITARRA");
    } else if(prevState.AlumnosNatacion.length !== this.state.AlumnosNatacion.length){
      const json = JSON.stringify(this.state.AlumnosNatacion);
      localStorage.setItem('AlumnosNatacion',json);
      console.log("Saving data NATACION");
    } else if(prevState.AlumnosFutbol.length !== this.state.AlumnosFutbol.length){
      const json = JSON.stringify(this.state.AlumnosFutbol);
      localStorage.setItem('AlumnosFutbol',json);
      console.log("Saving data FUTBOL");
    }
  }

//SOLO PARA PRUEBAS------------------------------------------------------------------------------------------------------------------------
  handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  }

//SE COMPRUEBA QUE EL ALUMNO NO SE HAYA ESCRITO AL EXTRACURRICULAR Y DE LO CONTRARIO LO INGRESA AL ARREGLO CORRESPONDIENTE---------------------------------------------------------------
  handleAddOption = (option) => {
    if (document.getElementById('BotonPiano').checked) {
      if(!option){
        return 'Numero invalido o vacio, intenta otra vez';
      }else if(this.state.AlumnosPiano.indexOf(option) > -1){
        return 'Este numero de control ya fue ingresado.';
      } else if(option.length != 8){
        return 'El numero de control deberia tener 8 digitos!.';
      } else{
        this.setState((prevState) => ({
            AlumnosPiano: prevState.AlumnosPiano.concat([option])
        }));
        document.getElementById('BotonPiano').checked = false;
      }
    }

    else if (document.getElementById('BotonGuitarra').checked) {
      if(!option){
        return 'Numero invalido!, intenta otra vez';
      }else if(this.state.AlumnosGuitarra.indexOf(option) > -1){
        return 'Este numero de control ya fue ingresado.';
      } else if(option.length != 8){
        return 'El numero de control deberia tener 8 digitos!.';
      } else{
        this.setState((prevState) => ({
            AlumnosGuitarra: prevState.AlumnosGuitarra.concat([option])
        }));
        document.getElementById('BotonGuitarra').checked = false;
      }
    }

    else if (document.getElementById('BotonNatacion').checked) {
      if(!option){
        return 'Numero invalido!, intenta otra vez';
      }else if(this.state.AlumnosNatacion.indexOf(option) > -1){
        return 'Este numero de control ya fue ingresado.';
      }else if(option.length != 8){
        return 'El numero de control deberia tener 8 digitos!.';
      } else{
        this.setState((prevState) => ({
            AlumnosNatacion: prevState.AlumnosNatacion.concat([option])
        }));
        document.getElementById('BotonNatacion').checked = false;
      }
    }

    else if (document.getElementById('BotonFutbol').checked) {
      if(!option){
        return 'Numero invalido!, intenta otra vez';
      }else if(this.state.AlumnosFutbol.indexOf(option) > -1){
        return 'Este numero de control ya fue ingresado.';
      }else if(option.length != 8){
        return 'El numero de control deberia tener 8 digitos!.';
      } else{
        this.setState((prevState) => ({
            AlumnosFutbol: prevState.AlumnosFutbol.concat([option])
        }));
        document.getElementById('BotonFutbol').checked = false;
      }
    }
  }

  //ELIMINADO DE TODOS LOS ALUMNOS: NECESARIA DE PRUEBA----------------------------------------------------------------------------------------------------------------
  handleDeleteOptionsPIANO = () => {
    this.setState(() => ({AlumnosPiano:[]}));
  }
  handleDeleteOptionsGUITARRA = () => {
    this.setState(() => ({AlumnosGuitarra:[]}));
  }
  handleDeleteOptionsNATACION = () => {
    this.setState(() => ({AlumnosNatacion:[]}));
  }
  handleDeleteOptionsFUTBOL = () => {
    this.setState(() => ({AlumnosFutbol:[]}));
  }

//SE LE DA UN VALOR AL selectedOption QUE ES REQUERIDO PARA LA ACTIVACION DEL MODAL----------------------------------------------------------------------------------------------------------------
  handlePickPIANO = () => {
      this.setState(() => ({
        selectedOption: "Piano"
      }));
  }
  handlePickGUITARRA = () => {
      this.setState(() => ({
        selectedOption: "Guitarra"
      }));
  }
  handlePickNATACION = () => {
      this.setState(() => ({
        selectedOption: "Natacion"
      }));
  }
  handlePickFUTBOL = () => {
      this.setState(() => ({
        selectedOption: "Futbol"
      }));
  }

//SE RENDERIZA LA APLICACION----------------------------------------------------------------------------------------------------------------
    render(){
      const title = 'UnivLife';
      const subtitle = 'Descubre tu potencial.';
      return(
        <div>
          <Header title={title} subtitle={subtitle}/>
          <div className="container2">
          <h1> Paso 1: Escoge tu extracurricular </h1>

              <table>
                <caption> Actividades Culturales </caption>
                <tr>
                  <td> <p>Alumnos: {this.state.AlumnosPiano.length}</p> </td>
                  <td>
                    <input type="radio" name="extra" id="BotonPiano" onClick={this.handlePickPIANO} disabled={this.state.AlumnosPiano.length >= 10}/>
                  </td>
                  <td>
                    <h3> Piano </h3>
                    <p> Clases de piano nivel basico: 12:00 - 13: 00, Lunes y Miercoles </p>
                  </td>
                </tr>

                <tr>
                  <td> <p>Alumnos: {this.state.AlumnosGuitarra.length}</p> </td>
                  <td>
                    <input type="radio" name="extra" id="BotonGuitarra" onClick={this.handlePickGUITARRA} disabled={this.state.AlumnosGuitarra.length >= 10}/>
                  </td>
                  <td>
                    <h3> Guitarra </h3>
                    <p> Clases de guitarra nivel basico: 11:00 - 13: 00, Sabado </p>
                  </td>
                </tr>
              </table>

              <h1>   </h1>

              <table>
                <caption> Actividades Deportivas </caption>
                <tr>
                  <td> <p>Alumnos: {this.state.AlumnosNatacion.length}</p> </td>
                  <td>
                    <input type="radio" name="extra" id="BotonNatacion" onClick={this.handlePickNATACION} disabled={this.state.AlumnosNatacion.length >= 10}/>
                  </td>
                  <td>
                    <h3> Natacion </h3>
                    <p> Nivel basico, medio y experto: 12:00 - 14: 00, Martes y Jueves </p>
                  </td>
                </tr>

                <tr>
                  <td> <p>Alumnos: {this.state.AlumnosFutbol.length}</p> </td>
                  <td>
                    <input type="radio" name="extra" id="BotonFutbol" onClick={this.handlePickFUTBOL} disabled={this.state.AlumnosFutbol.length >= 10}/>
                  </td>
                  <td>
                    <h3> Futbol </h3>
                    <p> Reglamento y equipos: 10:00 - 13: 00, Viernes </p>
                  </td>
                </tr>
              </table>

          <h1> Paso 2: Escribe tus datos. </h1>
              <AddOption
                options={this.state.options}
                handleAddOption={this.handleAddOption}
              />
          </div>

            <OptionModal
              selectedOption = {this.state.selectedOption}
              clearModal = {this.handleClearSelectedOption}
              AgregarAlumno = {this.componentDidUpdate}
            />

          <div className="container3">
          <Footer title={title} subtitle={subtitle}/>
          <p>Botones para eliminar el contenido de los arreglos, no necesario para los alumnos pero si para hacer prueba.</p>
          <h1>  </h1>
            <button onClick={this.handleDeleteOptionsPIANO}> Eliminar Piano </button>
            <button onClick={this.handleDeleteOptionsGUITARRA}> Eliminar Guitarra </button>
            <button onClick={this.handleDeleteOptionsNATACION}> Eliminar Natacion </button>
            <button onClick={this.handleDeleteOptionsFUTBOL}> Eliminar Futbol </button>
          </div>

        </div>
      );
    }
}
