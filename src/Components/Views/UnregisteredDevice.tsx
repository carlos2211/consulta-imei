import React from "react";
import { translations } from "../../utils/translation";
// import img from "../../assets/img/Bands/5g.png";

interface UnregisteredDeviceProps {
  data: any; // Replace 'any' with the actual type of 'data' if known
}

const UnregisteredDevice: React.FC<UnregisteredDeviceProps> = ({ data }) => {
  const language = "EN";
  const t = translations[language];
  return (
    <div>
      <h1 className="text-2xl font-bold text-black text-center mt-10">
        IMEI CONSULTADO: {data.imeiNumber}
      </h1>
      <div className="flex flex-col items-center gap-4 mt-4">
        <p className="text-lg">
          Tu equipo no se encuentra inscrito en el sistema y no puede funcionar
          en las redes móviles nacionales. Si tu equipo lo trajiste desde el
          extranjero, lo debes inscribir. Ingresa a https://multibanda.cl/ia,
          para conocer el procedimiento.
        </p>
        <p className="text-lg">
          Si tu equipo fue adquirido en Chile y aparece como no inscrito, es
          porque no está homologado y quedará inhabilitado para su uso en las
          redes nacionales transcurrido el plazo de 30 días contado desde la
          fecha que insertes por primera vez un chip.
        </p>
        <p className="text-lg">
          Puedes solicitar a la empresa que te lo vendió que, de acuerdo a lo
          que indica la Ley del Consumidor, proceda a: La devolución del dinero
          o el cambio de equipo por uno homologado y eventualmente,
          indemnización de daños y perjuicios (esto último, en tribunales).
        </p>
        <p>
          Todos los IMEI de los equipos móviles, tanto teléfonos como otros
          dispositivos, deberán estar inscritos en un sistema centralizado para
          poder operar en las redes nacionales.
        </p>
        <p>Multibanda SAE – Ver información detallada en www.multibanda.cl</p>
        <button
          className="red-button px-4 mt-6"
          onClick={() =>
            window.open(
              "https://www.clarochile.cl/personas/inscribe-imei/",
              "_blank"
            )
          }
        >
          Inscripción Administrativa
        </button>
        <button className="red-button px-4 mt-6">Consultar otro IMEI</button>
      </div>
    </div>
  );
};

export default UnregisteredDevice;
