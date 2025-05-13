import React from "react";
import { translations } from "../../utils/translation";
import img from "../../assets/img/Bands/5g.png";
import smile from "../../assets/img/smile.png";

interface RegisteredUnlockedDeviceProps {
  data: any;
}

const RegisteredUnlockedDevice = ({
  data,
  onReset,
}: {
  data: any;
  onReset: () => void;
}) => {
  console.log("data", data); // Removed or moved inside the component
  const language = "EN";
  const t = translations[language];
  return (
    <div>
      <img src={smile} alt="Smile" className="w-20 h-20 mx-auto" />
      <h1 className="text-2xl font-bold text-[#008C67] text-center mt-10">
        IMEI Consultado: {data.imeiNumber}
      </h1>
      <div className="flex flex-col items-center gap-4 mt-4">
        <p className="text-lg">
          Tu equipo se encuentra <span className="text-[#008C67] font-bold">desbloqueado y esta inscrito en el sistema</span> y
          puede operar en todas las redes móviles nacionales 2G 3G 4G.
        </p>
        <p className="text-lg">
          CLARO no tiene información respecto a las características 5G de este
          equipo. Consulte con la empresa donde lo adquirió para verificar
          compatibilidad 5G en cada compañía.
        </p>
        <img src={img} alt="5G" className="w-48 h-24" />
        <p className="text-lg">
          Este equipo <span className="text-[#DA291C] font-bold">no tiene</span> incorporado un sintonizador de radio FM
        </p>
           <div className="bg-[#F5F7FC] py-6 px-8 rounded-3xl mt-4 ">
        <p className="font-bold my-2">
          Todos los IMEI de los equipos móviles, tanto teléfonos como otros
          dispositivos, deberán estar inscritos en un sistema centralizado para
          poder operar en las redes nacionales.
        </p>
        <p>Multibanda SAE – Ver información detallada en <a href="https://multibanda.cl" className="text-[#0097A9] underline font-bold line">https://multibanda.cl</a></p>
        </div>
        <button
          className="red-button "
          onClick={onReset}
        >
          Consultar otro IMEI
        </button>
      </div>
    </div>
  );
};

export default RegisteredUnlockedDevice;
