import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';

import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function ShopingCard({ description, title, price, img ,id,left}) {
  


 
  return (

    <>
     
    <Card  sx={{width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={img}
            srcSet={img}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{description }</Typography>
        <Link
          href="#product-card"
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
        >
          {title}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          {price}

        </Typography>
        <Typography level="body-sm">
            (Only <b>{ left}</b> left in stock!)
        </Typography>
      </CardContent>
          <CardOverflow sx={{ display: "flex",gap:".5rem" }}>
        <Button variant="solid" color="danger" size="lg">
          Add to cart
          </Button>
          <Link  to={`${id}`}>  
              <Button className='block w-full' variant="solid" color="primary" size="lg" >
          <span >Buy Now</span>
            </Button></Link>
            
      </CardOverflow>
      
    </Card>
    </>
  );
}