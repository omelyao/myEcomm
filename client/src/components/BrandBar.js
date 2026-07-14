import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Row, Card } from 'react-bootstrap';
const BrandBar = observer(() => {
   const { device } = useContext(Context)
   return (
      <Row className='flex-wrap justify-content-start align-items-center'>
         {device.brands.map((brand) =>
            <Card
               border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
               onClick={() => device.setSelectedBrand(brand)}
               className='p-3' key={brand.id}
               style={{
                  cursor: 'pointer',
                  width: 'fit-content',
                  minWidth: '140px',
                  maxWidth: '140px',
                  flexShrink: 1
               }}>
               {brand.name}
            </Card>
         )}
      </Row>
   );
});

export default BrandBar;