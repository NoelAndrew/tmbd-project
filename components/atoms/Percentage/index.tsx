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

    const convertirDecimalApercentage = (decimal: any) => {
        const percentage = Math.floor(decimal * 10);
        return percentage;
    };

    const percentage = convertirDecimalApercentage(decimal);

  return (
    <div>
        {currentPage !== "/" ?
            <>
            <div className="flex items-center">
              <CircularProgressbar
                value={ percentage }
                text={`${ percentage }%`}
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
                value={ percentage }
                text={`${percentage}%`}
                styles={{
                  text: {
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