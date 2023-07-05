import React from 'react';
import { useRouter } from 'next/router';

const Percentage = ({ decimal }: any) => {
    const router = useRouter();
    const currentPage = router.pathname;
    const convertirDecimalAPorcentaje = (decimal: any) => {
        const porcentaje = Math.floor(decimal * 10);
        return `${porcentaje}%`;
    };

    const porcentaje = convertirDecimalAPorcentaje(decimal);

  return (
    <div>
        {currentPage !== "/" ?
            <span className="flex justify-center text-lg font-bold">{porcentaje}</span>
            : <span className="flex justify-center text-sm font-bold">{porcentaje}</span>
        }
    </div>
  );
}

export default Percentage;