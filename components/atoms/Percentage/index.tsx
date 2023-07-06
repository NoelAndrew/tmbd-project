import React from 'react';
import { useRouter } from 'next/router';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
interface Props {
  decimal: number;
}

const Percentage = ({ decimal }: Props) => {
    const router = useRouter();
    const currentPage = router.pathname;
    
    const convertirDecimalAPorcentaje = (decimal: any) => {
        const porcentaje = Math.floor(decimal * 10);
        return porcentaje;
    };

    const porcentaje = convertirDecimalAPorcentaje(decimal);

  return (
    <div>
        {currentPage !== "/" ?
            <>
            <div className="flex items-center">
              <CircularProgressbar
                value={ porcentaje }
                text={`${ porcentaje }%`}
                styles={{
                  text: {
                    fontSize: "1.9vw",
                    fontWeight: 400,
                    fill: "#ffffff",
                  }
                }}
              />
            </div>
            </>
            : 
            <>
            <div className="flex items-center">
              <CircularProgressbar
                value={ porcentaje }
                text={`${porcentaje}%`}
                styles={{
                  text: {
                    fontSize: "2vw",
                    fontWeight: 400,
                    fill: "#ffffff",
                  }
                }}
              />
            </div>
          </>
        }
    </div>
  );
}

export default Percentage;