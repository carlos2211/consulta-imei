import React from "react";
import { translations } from "../../utils/translation";
import img from "../../assets/img/Bands/5g.png";

interface EnrolledLockedDeviceProps {
  data: any; 
}

const EnrolledLockedDevice: React.FC<EnrolledLockedDeviceProps> = ({ data }) => {
  const language = "EN";
  const t = translations[language];
  return (
    <div>
      <h1 className="text-2xl font-bold text-black text-center mt-10">
        IMEI CONSULTADO: {data.imeiNumber}
      </h1>
      <div className="flex flex-col items-center gap-4 mt-4">
        <p className="text-lg">
          Tu equipo se encuentra inscrito en el sistema y puede operar en todas
          las redes móviles nacionales 2G 3G 4G.
        </p>
        <p className="text-lg">
          No obstante, se encuentra bloqueado por Mora Equipo , desde el
          14/10/2024, por denuncia en la empresa CLARO CHILE S.A.
        </p>
        <p className="text-lg">
          CLARO no tiene información respecto a las características 5G de este
          equipo. Consulte con la empresa donde lo adquirió para verificar
          compatibilidad 5G en cada compañía.
        </p>
        <img src={img} alt="5G" className="w-1/2 h-auto" />
        <p className="text-lg">
          Este equipo tiene incorporado un sintonizador de radio FM
        </p>
        <p>
          Todos los IMEI de los equipos móviles, tanto teléfonos como otros
          dispositivos, deberán estar inscritos en un sistema centralizado para
          poder operar en las redes nacionales.
        </p>
        <p>Multibanda SAE – Ver información detallada en www.multibanda.cl</p>
        <button
          className="red-button px-4 mt-6"
        >
          Consultar otro IMEI
        </button>
      </div>
    </div>
  );
};

export default EnrolledLockedDevice;
