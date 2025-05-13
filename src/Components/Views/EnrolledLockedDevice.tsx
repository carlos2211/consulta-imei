import React from "react";
import { translations } from "../../utils/translation";
import img from "../../assets/img/Bands/5g.png";
import frown from "../../assets/img/frown.png";

interface EnrolledLockedDeviceProps {
  data: any;
}

const EnrolledLockedDevice = ({
  data,
  onReset,
}: {
  data: any;
  onReset: () => void;
}) => {
  const language = "EN";
  const t = translations[language];
  return (
    <div>
      <img src={frown} alt="Frown" className="w-20 h-20 mx-auto"/>
       <h1 className="text-2xl font-bold text-[#DA291C] text-center mt-10">
        <span className="block sm:inline">IMEI Consultado:</span>{' '}
        <span className="block sm:inline">{data.imeiNumber}</span>
      </h1>
      <div className="flex flex-col items-center gap-4 mt-4">
        <p className="text-lg">
          Tu equipo se encuentra <span className="text-[#008C67] font-bold">inscrito en el sistema</span> y puede operar en todas
          las redes móviles nacionales 2G 3G 4G.
        </p>
        <p className="text-lg">
          No obstante, se encuentra <span className="text-[#DA291C] font-bold">bloqueado por Mora Equipo</span>, desde el
          14/10/2024, por denuncia en la empresa <span className="text-black font-bold">CLARO CHILE S.A.</span> 
        </p>
        <p className="text-lg">
          CLARO no tiene información respecto a las características 5G de este
          equipo. Consulte con la empresa donde lo adquirió para verificar
          compatibilidad 5G en cada compañía.
        </p>
        <img src={img} alt="5G" className="w-48 h-24" />
        <p className="text-lg">
          Este equipo <span className="text-[#008C67] font-bold">tiene</span> incorporado un sintonizador de radio FM
        </p>
           <div className="bg-[#F5F7FC] py-6 px-8 rounded-3xl mt-4 ">
        <p className="font-bold my-2">
          Todos los IMEI de los equipos móviles, tanto teléfonos como otros
          dispositivos, deberán estar inscritos en un sistema centralizado para
          poder operar en las redes nacionales.
        </p>
        <p>Multibanda SAE – Ver información detallada en <a href="https://multibanda.cl" className="text-[#0097A9] underline font-bold line">https://multibanda.cl</a></p>
        </div>
        <button className="red-button  " onClick={onReset}>
          Consultar otro IMEI
        </button>
      </div>
    </div>
  );
};

export default EnrolledLockedDevice;
