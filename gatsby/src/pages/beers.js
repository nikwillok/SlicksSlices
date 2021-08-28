import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import SEO from '../components/SEO'

const BeersPage = ({ data }) => {
  return (
    <>
      <SEO title={`Beers We have ${data.beers.nodes.length} in stock`} />
      <h2 className='center'>
        We have {data.beers.nodes.length} beers available. Dine in only!
      </h2>
      <BeerGridStyles>
        {data.beers.nodes.map((beer) => {
          if (!beer.name) return;
          const rating = Math.round(beer.rating.average);
          return (
            <SingleBeerStyles key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3>{beer.name}</h3>
              {beer.price}
              <p title={`${rating} out of 5 stars`}>
                {`🍕`.repeat(rating)}
                {/* <span style={{ filter: `yellow` }}>
                  {'🍕'.repeat(5 - rating)}
                </span> */}
                <span>({beer.rating.reviews})</span>
              </p>
            </SingleBeerStyles>
          );
        })}
      </BeerGridStyles>
    </>
  );
}

export default BeersPage

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: block;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;